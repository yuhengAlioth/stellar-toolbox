import { batteryType } from '@renderer/types/batteryType'
import type { DescriptionsProps } from 'antd'
import { Alert, Descriptions, Flex, Modal } from 'antd'

interface BatteryModalProps {
  open: boolean
  onCancel: () => void
  data: batteryType
  error?: Error | null
}
/**
 * @abstract 设备信息 - 电池信息弹窗
 */
export default function BatteryModal({ open, onCancel, data, error }: BatteryModalProps) {
  const items: DescriptionsProps['items'] = [
    {
      label: '电池设计容量',
      children: data.designedCapacity,
    },
    {
      label: '电池最大容量',
      children: data.maxCapacity,
    },
    {
      label: '电池电流容量',
      children: data.currentCapacity,
    },
    {
      label: '容量单位',
      children: data.capacityUnit,
    },
    {
      label: '制造商',
      children: data.manufacturer,
    },
    {
      label: '电池百分比',
      children: `${data.percent} %`,
    },
    {
      label: '充电状态',
      children: `${data.isCharging ? '正在充电' : '未充电'}`,
    },
    {
      label: '电池电流电压',
      children: `${data.voltage} V`,
    },
    {
      label: '交流电连接状态',
      children: `${data.acConnected ? '已连接' : '未连接'}`,
    },
  ]

  return (
    <>
      <Modal
        open={open}
        centered
        title="电池详情"
        className="rounded-md h-3/5 overflow-y-auto"
        style={{ scrollbarWidth: 'none' }}
        width={1000}
        onCancel={onCancel}
        footer={null}>
        <Flex gap="small" wrap justify="space-evenly" align="center">
          {error ? (
            <Alert message="Error" description={error.message} type="error" showIcon />
          ) : (
            <Descriptions bordered items={items} />
          )}
        </Flex>
      </Modal>
    </>
  )
}
