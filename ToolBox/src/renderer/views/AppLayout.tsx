import SiderLeft from '@renderer/components/SiderLeft'
import Routes from '@renderer/router/routes'
import { Layout, theme } from 'antd'

const { Header, Content, Footer } = Layout

export default function AppLayout() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <SiderLeft />
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '24px 16px 20px' }}>
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                height: '100%',
                overflowY: 'auto', // 启用垂直滚动
                scrollbarWidth: 'none', // 隐藏滚动条
              }}>
              {/* 路由出口 */}
              {/* <Outlet /> */}
              <Routes />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', background: '#71371f' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  )
}
