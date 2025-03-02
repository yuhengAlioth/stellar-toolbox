import { ipcRenderer } from 'electron'
import getBasis from './getBasis'
import getDeviceInfo from './getDeviceInfo'
// 导入API
const api = {
  ...getBasis,
  ...getDeviceInfo,
  hideSettingWindow: () => {
    ipcRenderer.send('hideSettingWindow')
  },
  openSettingWindow: () => {
    ipcRenderer.send('openSettingWindow')
  },
}

export default api
