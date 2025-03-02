import { BrowserWindow, ipcMain } from 'electron'
import { openSettingWindow } from '../setting'
import systeminformationIpc from './systeminformationIpc'

export const homeWindowIpc = (win: BrowserWindow) => {
  systeminformationIpc()

  // 打开设置窗口
  ipcMain.on('openSettingWindow', () => {
    openSettingWindow()
    console.log('打开设置窗口', win)
  })
}
