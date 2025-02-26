import { Button, Card, Col, ConfigProvider, Row } from 'antd'
import { useState } from 'react'
import DiskDataGraph from './graph/DiskDataGraph'
import DiskModal from './modalWindow/DiskModal'
import ShortcutPanel from './panel/ShortcutPanel'
import SystemMemoryGraph from './graph/SystemMemoryGraph'

/**
 * @abstract 设备信息 - 顶部模块
 */
export default function TopModule() {
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const data = [
    {
      diskName: 'C盘',
      diskData: [
        { type: '已使用', value: 58 },
        { type: '未使用', value: 42 },
      ],
    },
    {
      diskName: 'D盘',
      diskData: [
        { type: '已使用', value: 70 },
        { type: '未使用', value: 30 },
      ],
    },
  ]
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            bodyPadding: 6,
          },
        },
      }}>
      {/* 磁盘空间 */}
      <Row gutter={[16, 16]} className="w-full ">
        <Col sm={11} xl={10}>
          <Card
            title="设备信息"
            hoverable={true}
            className="w-full h-full"
            style={{ height: 370 }}
            extra={
              <Button color="default" variant="link" key="more" onClick={showModal}>
                查看详情
              </Button>
            }>
            <DiskDataGraph />
            <DiskModal open={open} data={data} onCancel={handleCancel} />
          </Card>
        </Col>
        {/* 系统内存 */}
        <Col sm={7} xl={6}>
          <Card title="系统内存" hoverable={true} className="w-full" style={{ height: 370 }}>
            <SystemMemoryGraph />
          </Card>
        </Col>
        {/* 快捷功能 */}
        <Col sm={6} xl={8}>
          <Card title="快捷功能" hoverable={true} className="w-full " style={{ height: 370 }}>
            <ShortcutPanel />
          </Card>
        </Col>
      </Row>
    </ConfigProvider>
  )
}
