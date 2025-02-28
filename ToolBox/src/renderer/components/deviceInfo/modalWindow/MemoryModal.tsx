import { memoryType } from '@renderer/types/memoryType'
import convertUtil from '@renderer/utils/convertUtil'
import type { DescriptionsProps } from 'antd'
import { Alert, Descriptions, Flex, Modal, Tabs } from 'antd'

interface MemoryModalProps {
  open: boolean
  onCancel: () => void
  data: memoryType
  error?: Error | null
}
/**
 * @abstract 设备信息 - 内存信息弹窗
 */
export default function MemoryModal({ open, onCancel, data, error }: MemoryModalProps) {
  const labelMap: Record<string, string> = {
    bank: '编号',
    manufacturer: '厂商',
    type: '类型',
    size: '大小',
    clockSpeed: '频率',
  }

  const generateItems = (info: Record<string, any>): DescriptionsProps['items'] =>
    Object.entries(info).map(([key, value]) => {
      let formattedValue = String(value)
      if (key === 'size') {
        formattedValue = convertUtil.formatSize(value)
      } else if (key === 'clockSpeed') {
        formattedValue = `${value} MHz`
      }
      return {
        label: labelMap[key] || key.charAt(0).toUpperCase() + key.slice(1),
        children: formattedValue,
      }
    })

  const otherTabs = Object.entries(data).map(([key, value]) => {
    // 确保 value 是一个对象
    const info = typeof value === 'object' ? value : { [key]: value }
    return {
      label: `内存 ${key}`,
      key: key,
      content: generateItems(info),
    }
  })

  const tabs = [...otherTabs]

  return (
    <>
      <Modal
        open={open}
        centered
        title="内存详情"
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
              defaultActiveKey={tabs[0]?.key}
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
