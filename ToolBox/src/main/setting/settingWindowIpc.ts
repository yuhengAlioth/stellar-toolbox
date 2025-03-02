import { BrowserWindow, ipcMain } from 'electron'

export const settingWindowIpc = (win: BrowserWindow | null) => {
  ipcMain.on('closeSettingWindow', () => {
    if (win) {
      win.close()
      win = null
    }
  })
}
