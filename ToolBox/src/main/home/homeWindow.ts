import { is } from '@electron-toolkit/utils'
import { BrowserWindow, shell } from 'electron'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'

export function createHomeWindow(): BrowserWindow {
  // 创建窗口
  const homeWindow = new BrowserWindow({
    width: 900,
    minWidth: 900,
    height: 670,
    minHeight: 670,
    center: true,
    show: false,
    // 窗口无边框
    // frame: false,
    // 窗口透明
    // transparent: true,
    // 置顶
    // alwaysOnTop: true,
    // 隐藏原本菜单栏
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  })

  // 开启调试工具
  homeWindow.webContents.openDevTools()
  homeWindow.on('ready-to-show', () => {
    homeWindow.show()
  })

  homeWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    homeWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    homeWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return homeWindow
}
