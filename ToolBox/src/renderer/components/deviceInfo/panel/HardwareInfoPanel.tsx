import { Computer, Cpu, Disk, Hdd, Microscope, MonitorOne, SolidStateDisk, System } from '@icon-park/react'
import { Card, Flex } from 'antd'
import { useState } from 'react'
import HardwareModal from '../modalWindow/HardwareModal'

const { Meta } = Card
/**
 * @abstract 设备信息 - 硬件配置信息卡片
 */
export default function HardwareInfoPanel() {
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }
  return (
    <div style={{ height: 290, overflowY: 'auto', padding: 5 }}>
      <Flex gap="small" wrap align="center">
        <Card hoverable={true} className="w-54 h-24" onClick={showModal}>
          <Meta avatar={<System size="24" />} title="系统" description="检测系统信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24">
          <Meta avatar={<Computer size="24" />} title="硬件" description="检测硬件信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24">
          <Meta avatar={<Cpu size="24" />} title="CPU" description="检测CPU信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24">
          <Meta avatar={<Hdd size="24" />} title="内存" description="检测内存信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24">
          <Meta avatar={<SolidStateDisk size="24" />} title="硬盘" description="检测硬盘信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24">
          <Meta avatar={<Disk size="24" />} title="磁盘" description="检测磁盘信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24">
          <Meta avatar={<Microscope size="24" />} title="显卡" description="检测显卡信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24">
          <Meta avatar={<MonitorOne size="24" />} title="显示器" description="检测显示器信息" />
        </Card>
      </Flex>
      <HardwareModal open={open} onCancel={handleCancel} />
    </div>
  )
}
