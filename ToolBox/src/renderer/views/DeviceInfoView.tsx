import BottomModule from '@renderer/components/deviceInfo/BottomModule'
import TopModule from '@renderer/components/deviceInfo/TopModule'
import { Space } from 'antd'

/**
 * @abstract 设备信息页面
 */
export default function DeviceInfoView() {
  return (
    <>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <TopModule />
        <BottomModule />
      </Space>
    </>
  )
}
