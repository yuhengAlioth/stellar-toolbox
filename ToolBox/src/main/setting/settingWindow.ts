import { is } from '@electron-toolkit/utils'
import { BrowserWindow, shell } from 'electron'
import url from 'node:url'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'

export function settingWindow(): BrowserWindow {
  // 创建窗口
  const settingWindow = new BrowserWindow({
    // maxWidth: 900,
    width: 500,
    // minWidth: 900,
    height: 500,
    // maxHeight: 500,
    // minHeight: 500,
    center: true,
    show: false,
    // 窗口无边框
    // frame: false,
    // 窗口透明
    // transparent: true,
    // 置顶
    alwaysOnTop: true,
    // 隐藏原本菜单栏
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  })

  // 开启调试工具
  settingWindow.webContents.openDevTools()
  settingWindow.on('ready-to-show', () => {
    settingWindow.show()
  })

  settingWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    settingWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#setting')
  } else {
    // 解决打包后软件窗口跳转失败问题
    settingWindow.loadURL(
      url.format({
        // 编译后的文件路径
        pathname: join(__dirname, '../renderer/index.html'),
        // URL 的协议部分
        protocol: 'file',
        // 使用两个斜杠 / 连接协议和路径
        slashes: true,
        // hash 的值，URL 的散列部分
        hash: 'setting',
      }),
    )
  }

  return settingWindow
}
