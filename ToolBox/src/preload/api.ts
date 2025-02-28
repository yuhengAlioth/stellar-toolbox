import getBasis from './basicFunctions/getBasis'
import getDeviceInfo from './deviceInfo/getDeviceInfo'
// 导入API
const api = {
  ...getBasis,
  ...getDeviceInfo,
}

export default api
