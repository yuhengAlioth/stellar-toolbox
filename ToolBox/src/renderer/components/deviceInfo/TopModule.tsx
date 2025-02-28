import convertUtil from '@renderer/utils/convertUtil'
import { Button, Card, Col, ConfigProvider, Row } from 'antd'
import { useEffect, useState } from 'react'
import DiskDataGraph from './graph/DiskDataGraph'
import SystemMemoryGraph from './graph/SystemMemoryGraph'
import DiskSpaceModal from './modalWindow/DiskSpaceModal'
import ShortcutPanel from './panel/ShortcutPanel'

/**
 * @abstract 设备信息 - 顶部模块
 */
export default function TopModule() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState<Error | null>(null)

  const fetchDiskData = async () => {
    try {
      // 获取数据
      const info = await window.api.fsSizeInfo()
      const diskData = info.map((disk) => ({
        diskName: `${disk.fs}盘\n${convertUtil.gbConversion(disk.size, 0)} GB`,
        diskData: [
          {
            type: `已使用(${convertUtil.gbConversion(disk.used, 1)}GB)`,
            value: convertUtil.percentageConversion(disk.used, disk.size, 1),
          },
          {
            type: `未使用(${convertUtil.gbConversion(disk.available, 1)}GB)`,
            value: convertUtil.percentageConversion(disk.available, disk.size, 1),
          },
        ],
      }))
      setData(diskData)
    } catch (err) {
      if (err instanceof Error) {
        // 确保 err 是 Error 类型
        setError(err)
      } else {
        // 将非 Error 类型的错误转换为 Error 对象
        setError(new Error(String(err)))
      }
    }
  }

  useEffect(() => {
    fetchDiskData()
  }, [])

  const showModal = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

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
            <DiskSpaceModal open={open} data={data} error={error} onCancel={handleCancel} />
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
