import { CloseSmall, KeyboardOne, Save, SettingOne } from '@icon-park/react'
import { Card, Menu, Tabs } from 'antd'
import './index.scss'
import TabPane from 'antd/es/tabs/TabPane'
import { useState } from 'react'

export default function SettingView() {
  // 关闭设置页面
  const closeSetting = () => {
    window.api.hideSettingWindow()
  }
  // 当前激活的Tab项的key值
  const [activeKey, setActiveKey] = useState('1')

  // 切换Tab项
  const changeTab = (key: string) => {
    setActiveKey(key)
  }
  return (
    <div
      className="setting flex flex-row"
      style={{
        WebkitAppRegion: 'drag',
      }}>
      <div className="left basis-1/3 bg-gray-100 flex flex-col items-center pt-8 pb-8">
        <Menu style={{ width: 140, height: 50, backgroundColor: 'transparent', border: 0 }} mode="inline">
          <Menu.Item key="1" style={{ padding: 0 }}>
            <div
              onClick={() => changeTab('1')}
              className="setting-item flex flex-row gap-3 items-center  rounded-md bg-gray-200:hover pl-5">
              <SettingOne theme="outline" size="24" fill="#333" />
              <span>通用设置</span>
            </div>
          </Menu.Item>
          <Menu.Item key="2" className="p-0" style={{ padding: 0 }}>
            <div
              onClick={() => changeTab('2')}
              className="setting-item flex flex-row gap-3 items-center  rounded-md bg-gray-200:hover pl-5">
              <KeyboardOne theme="outline" size="24" fill="#333" />
              <span>快捷键</span>
            </div>
          </Menu.Item>
          <Menu.Item key="3" className="p-0" style={{ padding: 0 }}>
            <div
              onClick={() => changeTab('3')}
              className="setting-item flex flex-row gap-3 items-center  rounded-md bg-gray-200:hover pl-5">
              <Save theme="outline" size="24" fill="#333" />
              <span>存储</span>
            </div>
          </Menu.Item>
        </Menu>
      </div>
      <div className="right basis-2/3 bg-gray-200 h-screen ">
        <div className="setting-close flex flex-row justify-end p-6 ">
          <CloseSmall className="setting-close-icon" onClick={closeSetting} size="24" fill="#333" />
        </div>
        <div className="setting-content flex flex-col items-center">
          <Card style={{ width: 300 }}>
            <Tabs className="tab" type="card" activeKey={activeKey} defaultActiveKey="1">
              <TabPane key="1">选项卡一内容</TabPane>
              <TabPane key="2">选项卡二内容</TabPane>
              <TabPane key="3">选项卡三内容</TabPane>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  )
}
