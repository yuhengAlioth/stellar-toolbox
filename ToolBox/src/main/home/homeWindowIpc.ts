import { BrowserWindow, ipcMain } from 'electron'
import { createSettingWindow } from '../setting'
import systeminformationIpc from './systeminformationIpc'

let settingWindow: BrowserWindow | null = null
export const homeWindowIpc = (window: BrowserWindow) => {
  systeminformationIpc()

  ipcMain.on('hideSettingWindow', () => {
    settingWindow?.close()
    settingWindow = null
  })
  ipcMain.on('openSettingWindow', () => {
    
    if (!settingWindow) {
      console.log('settingWindow')
      settingWindow = createSettingWindow()
    }
  })
}
