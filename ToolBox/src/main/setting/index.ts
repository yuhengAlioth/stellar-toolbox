import { BrowserWindow } from 'electron'
import { createSettingWindow } from './settingWindow'
import { settingWindowIpc } from './settingWindowIpc'

let win = null as BrowserWindow | null
// 创建设置窗口
const openSettingWindow = () => {
  // 不让窗口多次创建
  if (!win) win = createSettingWindow()
  // 注册IPC事件
  settingWindowIpc(win)
  // 关闭窗口时销毁
  win.on('closed', () => {
    win = null
  })
  return win
}

export { openSettingWindow }
