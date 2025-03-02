import { app } from 'electron'
import { createHomeWindow } from './homeWindow'
import { homeWindowIpc } from './homeWindowIpc'

app.whenReady().then(() => {
  // 创建窗口
  const win = createHomeWindow()
  // 注册IPC事件
  homeWindowIpc(win)
})
