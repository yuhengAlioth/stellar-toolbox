import { hardwareType } from '@renderer/types/hardwareType'
import type { DescriptionsProps } from 'antd'
import { Alert, Descriptions, Flex, Modal, Tabs } from 'antd'

interface HardwareModalProps {
  open: boolean
  onCancel: () => void
  data: hardwareType
  error?: Error | null
}
/**
 * @abstract 设备信息 - 硬件信息弹窗
 */
export default function HardwareModal({ open, onCancel, data, error }: HardwareModalProps) {
  const labelMap: Record<string, string> = {
    manufacturer: '制造商',
    version: '版本号',
    serial: '序列号',
    vendor: '供应商',
    releaseDate: '发布日期',
    model: '型号',
    memSlots: '插槽数量',
    type: '类型',
  }
  const generateItems = (info: Record<string, any>): DescriptionsProps['items'] =>
    Object.entries(info).map(([key, value]) => ({
      label: labelMap[key] || key.charAt(0).toUpperCase() + key.slice(1),
      children: String(value),
    }))
  const tabs = [
    { label: '系统信息', key: 'system', content: generateItems(data.system) },
    { label: 'BIOS 信息', key: 'bios', content: generateItems(data.bios) },
    { label: '主板信息', key: 'baseboard', content: generateItems(data.baseboard) },
    { label: '机箱信息', key: 'chassis', content: generateItems(data.chassis) },
  ]

  return (
    <>
      <Modal
        open={open}
        centered
        title="硬件详情"
        className="rounded-md h-3/5 overflow-y-auto"
        style={{ scrollbarWidth: 'none' }}
        width={1000}
        onCancel={onCancel}
        footer={null}>
        <Flex gap="small" wrap justify="space-evenly" align="center">
          {error ? (
            <Alert message="Error" description={error.message} type="error" showIcon />
          ) : (
            <Tabs
              defaultActiveKey="system"
              centered
              items={tabs.map(({ label, key, content }) => {
                return {
                  label: label,
                  key: key,
                  children: <Descriptions bordered items={content} />,
                }
              })}
            />
          )}
        </Flex>
      </Modal>
    </>
  )
}
