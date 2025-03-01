import { Setting } from '@icon-park/react'
import { Menu } from 'antd'

function SettingBtn() {
  // 处理点击事件
  const handleClick = () => {
    console.log('SettingBtn clicked')
    window.electron.ipcRenderer.send('createWindow', 1)
    console.log(window.electron)
  }
  return (
    <Menu.Item key="setting" onClick={handleClick}>
      <Setting theme="outline" size="16" fill="#333" />
    </Menu.Item>
  )
}

export default SettingBtn
