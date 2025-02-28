import { cpuType } from '@renderer/types/cpuType'
import type { DescriptionsProps } from 'antd'
import { Alert, Descriptions, Flex, Modal } from 'antd'

interface CpuModalProps {
  open: boolean
  onCancel: () => void
  data: cpuType
  error?: Error | null
}
/**
 * @abstract 设备信息 - CPU信息弹窗
 */
export default function CpuModal({ open, onCancel, data, error }: CpuModalProps) {
  const items: DescriptionsProps['items'] = [
    {
      label: '品牌',
      span: { sm: 2, xl: 2 },
      children: data.brand,
    },
    {
      label: '制造商',
      children: data.manufacturer,
    },
    {
      label: '供应商',
      children: data.vendor,
    },
    {
      label: '速度',
      children: `${data.speed} GHz`,
    },
    {
      label: '最小速度',
      children: `${data.speedMin} GHz`,
    },
    {
      label: '最大速度',
      children: `${data.speedMax} GHz`,
    },
    {
      label: '逻辑核心',
      children: `${data.cores} 个`,
    },
    {
      label: '物理核心',
      children: `${data.physicalCores} 个`,
    },
    {
      label: '处理器',
      children: `${data.processors} 个`,
    },
    {
      label: '虚拟化支持',
      children: data.virtualization ? '支持' : '不支持',
    },
  ]

  return (
    <>
      <Modal
        open={open}
        centered
        title="CPU详情"
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
