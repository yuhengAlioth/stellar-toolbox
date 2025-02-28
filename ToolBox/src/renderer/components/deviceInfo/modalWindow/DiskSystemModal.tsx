import { diskSystemType } from '@renderer/types/diskSystemType'
import convertUtil from '@renderer/utils/convertUtil'
import type { DescriptionsProps } from 'antd'
import { Alert, Descriptions, Flex, Modal, Tabs } from 'antd'

interface DiskSystemModalProps {
  open: boolean
  onCancel: () => void
  data: diskSystemType
  error?: Error | null
}
/**
 * @abstract 设备信息 - 磁盘信息弹窗
 */
export default function DiskSystemModal({ open, onCancel, data, error }: DiskSystemModalProps) {
  const labelMap: Record<string, string> = {
    name: '名称',
    identifier: '标识符',
    mount: '挂载点',
    label: '标签名称',
    fsType: '文件系统类型',
    uuid: 'UUID',
    physical: '物理模型',
    type: '类型',
    size: '大小',
    removable: '是否移动硬盘',
  }

  const generateItems = (info: Record<string, any>): DescriptionsProps['items'] =>
    Object.entries(info).map(([key, value]) => {
      let formattedValue = String(value)
      if (key === 'size') {
        formattedValue = convertUtil.gbConversion(value, 0).toString()
      } else if (key === 'removable') {
        formattedValue = value ? '是' : '否'
      }
      return {
        label: labelMap[key] || key.charAt(0).toUpperCase() + key.slice(1),
        children: formattedValue,
      }
    })

  const otherTabs = Object.entries(data).map(([key, value]) => ({
    label: `磁盘 ${value.name}`,
    key: key,
    content: generateItems(value),
  }))

  const tabs = [...otherTabs]

  return (
    <>
      <Modal
        open={open}
        centered
        title="磁盘详情"
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
