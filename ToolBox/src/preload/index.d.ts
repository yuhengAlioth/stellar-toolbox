import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    // 定义类型
    api: {
      hideSettingWindow: () => void
      openSettingWindow: () => void
    }
  }
}
