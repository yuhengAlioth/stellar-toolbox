import { diskType } from '@renderer/types/diskType'
import convertUtil from '@renderer/utils/convertUtil'
import type { DescriptionsProps } from 'antd'
import { Alert, Descriptions, Flex, Modal, Tabs } from 'antd'

interface DiskModalProps {
  open: boolean
  onCancel: () => void
  data: diskType
  error?: Error | null
}
/**
 * @abstract 设备信息 - 硬盘信息弹窗
 */
export default function DiskModal({ open, onCancel, data, error }: DiskModalProps) {
  const labelMap: Record<string, string> = {
    device: '设备',
    name: '名称',
    vendor: '制造商',
    type: '硬盘类型',
    size: '实际大小',
    firmwareRevision: '固件版本',
    serialNum: '序列号',
    smartStatus: '硬盘状态',
  }

  const generateItems = (info: Record<string, any>): DescriptionsProps['items'] =>
    Object.entries(info).map(([key, value]) => {
      let formattedValue = String(value)
      if (key === 'size') {
        formattedValue = convertUtil.formatSize(value)
      }
      return {
        label: labelMap[key] || key.charAt(0).toUpperCase() + key.slice(1),
        span: { sm: 2, xl: 2 },
        children: formattedValue,
      }
    })

  const otherTabs = Object.entries(data).map(([key, value]) => ({
    label: `硬盘 ${key}`,
    key: key,
    content: generateItems(value),
  }))

  const tabs = [...otherTabs]

  return (
    <>
      <Modal
        open={open}
        centered
        title="硬盘详情"
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
