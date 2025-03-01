import { BrowserWindow } from 'electron'
import { settingWindow } from './settingWindow'

let win = null as BrowserWindow | null
const createSettingWindow = () => {
  // 不让窗口多次创建
  if (!win) win = settingWindow()
  // 关闭窗口时销毁
  win.on('closed', () => {
    win = null
  })
}

export { createSettingWindow }
