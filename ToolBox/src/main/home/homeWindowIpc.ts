import { BrowserWindow, ipcMain } from 'electron'
import { createSettingWindow } from '../setting'
import systeminformationIpc from './systeminformationIpc'

export const homeWindowIpc = (win: BrowserWindow) => {
  systeminformationIpc()

  ipcMain.on('hideSettingWindow', () => {
    win.hide()
  })
  ipcMain.on('openSettingWindow', () => {
    createSettingWindow()
  })
}
