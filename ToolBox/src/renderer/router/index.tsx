import App from '@renderer/App'
import Versions from '@renderer/components/Versions'
import DeviceInfoView from '@renderer/views/DeviceInfoView'
import SettingView from '@renderer/views/SettingBtn/SettingView'
import { createHashRouter } from 'react-router'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <DeviceInfoView />,
      },
      {
        path: '/version',
        element: <Versions />,
      },
    ],
  },
  {
    path: '/setting',
    element: <SettingView />,
  },
])

export default router
