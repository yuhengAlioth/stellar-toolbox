import { ipcRenderer } from 'electron'
import getBasis from './getBasis'
import getDeviceInfo from './getDeviceInfo'
// 导入API
const api = {
  ...getBasis,
  ...getDeviceInfo,
  openSettingWindow: () => {
    ipcRenderer.send('openSettingWindow')
  },
  closeSettingWindow: () => {
    ipcRenderer.send('closeSettingWindow')
  },
}

export default api
