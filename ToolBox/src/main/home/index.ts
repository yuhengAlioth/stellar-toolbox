import { app } from 'electron'
import { createWindow } from './homeWindow'
import { homeWindowIpc } from './homeWindowIpc'

app.whenReady().then(() => {
  // 创建窗口
  const win = createWindow()
  // 注册IPC事件
  homeWindowIpc(win)
})
