import { Card, Col, ConfigProvider, Row } from 'antd'
import HardwareInfoPanel from './panel/HardwareInfoPanel'
import HelpPanel from './panel/HelpPanel'

/**
 * @abstract 设备信息 - 底部模块
 */
export default function Bottom() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            bodyPadding: 6,
          },
        },
      }}>
      {/* 硬件配置 */}
      <Row gutter={[16, 16]} className="w-full">
        <Col sm={16} xl={20}>
          <Card title="硬件配置" hoverable={true} className="w-full h-full" style={{ height: 370 }}>
            <HardwareInfoPanel />
          </Card>
        </Col>

        {/* 帮助 */}
        <Col sm={8} xl={4}>
          <Card title="帮助" hoverable={true} className="w-full " style={{ height: 370 }}>
            <HelpPanel />
          </Card>
        </Col>
      </Row>
    </ConfigProvider>
  )
}
