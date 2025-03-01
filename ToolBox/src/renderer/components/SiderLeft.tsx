import { DataScreen, Dislike, SettingTwo } from '@icon-park/react'
import { ConfigProvider, Menu, MenuProps } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: '/',
    icon: <DataScreen size="16" />,
    label: '设备信息',
  },
  { key: '/version', icon: <Dislike size="16" />, label: '编程环境' },
]

const bottomItems: MenuItem[] = [
  {
    key: '/setting',
    icon: <SettingTwo size="16" />,
    label: '设置',
  },
]

export default function SiderLeft() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    console.log('路径已更改:', location.pathname)
  }, [location.pathname])
  const handelClick = (e) => {
    console.log('点击了', e)
    navigate(e.key)
  }

  const bottomClick = (e) => {
    if (e.key === '/setting') {
      window.api.openSettingWindow()
    }
  }

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              siderBg: '#EDEDED',
            },
            Menu: {
              itemActiveBg: '#E1E1E1',
              itemBg: '#EDEDED',
              // itemBg: '#635282',
              horizontalItemSelectedBg: '#E1E1E1',
              itemSelectedBg: '#E1E1E1',
              itemSelectedColor: '#8e7cd6',
              collapsedWidth: 48,
              itemHeight: 48,
              itemBorderRadius: 5,
            },
          },
        }}>
        <Sider
          width={60}
          collapsedWidth={60}
          defaultCollapsed={true}
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100vh)',
              alignItems: 'center',
            }}>
            {/* 顶部菜单容器 */}
            <div
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}>
              {/* 图标 */}
              <div className="flex items-center justify-center my-1.5">
                <div className="h-12 w-12 bg-gradient-to-r from-cyan-500 to-blue-500" />
              </div>
              {/* 菜单 */}
              <Menu
                style={{ width: 60 }}
                mode="inline"
                selectedKeys={[location.pathname]}
                items={items}
                onClick={handelClick}
              />
            </div>
            {/* 底部菜单容器 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <Menu mode="inline" selectedKeys={[location.pathname]} items={bottomItems} onClick={bottomClick} />
            </div>
          </div>
        </Sider>
      </ConfigProvider>
    </>
  )
}
