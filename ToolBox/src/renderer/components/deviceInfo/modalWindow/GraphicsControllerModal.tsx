import { graphicsControllerType } from '@renderer/types/graphicsControllerType'
import type { DescriptionsProps } from 'antd'
import { Alert, Descriptions, Flex, Modal, Tabs } from 'antd'

interface GraphicsControllerModalProps {
  open: boolean
  onCancel: () => void
  data: graphicsControllerType
  error?: Error | null
}
/**
 * @abstract 设备信息 - 显卡信息弹窗
 */
export default function GraphicsControllerModal({ open, onCancel, data, error }: GraphicsControllerModalProps) {
  const labelMap: Record<string, string> = {
    vendor: '制造商',
    model: '图形控制器模型名称',
    subDeviceId: '子设备ID',
    bus: '总线',
    vram: '影像随机接达记忆器(显存)',
    vramDynamic: '显存动态',
  }

  const generateItems = (info: Record<string, any>): DescriptionsProps['items'] =>
    Object.entries(info).map(([key, value]) => {
      let formattedValue = String(value)
      if (key === 'vramDynamic') {
        formattedValue = value ? '开启' : '关闭'
      }
      return {
        label: labelMap[key] || key.charAt(0).toUpperCase() + key.slice(1),
        span: { sm: 2, xl: 2 },
        children: formattedValue,
      }
    })

  const otherTabs = Object.entries(data).map(([key, value]) => ({
    label: `显卡 ${key}`,
    key: key,
    content: generateItems(value),
  }))

  const tabs = [...otherTabs]

  return (
    <>
      <Modal
        open={open}
        centered
        title="显卡详情"
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
