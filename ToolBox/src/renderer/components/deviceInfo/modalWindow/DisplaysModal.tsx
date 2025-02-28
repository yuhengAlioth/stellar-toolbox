import { displaysType } from '@renderer/types/displaysType'
import type { DescriptionsProps } from 'antd'
import { Alert, Descriptions, Flex, Modal, Tabs } from 'antd'

interface DisplaysModalProps {
  open: boolean
  onCancel: () => void
  data: displaysType
  error?: Error | null
}
/**
 * @abstract 设备信息 - 显示器信息弹窗
 */
export default function DisplaysModal({ open, onCancel, data, error }: DisplaysModalProps) {
  const labelMap: Record<string, string> = {
    vendor: '供应商',
    model: '型号',
    deviceName: '设备名称',
    pixelDepth: '像素深度',
    currentRefreshRate: '屏幕刷新率',
    connection: '连接方式',
    builtin: '内置显示器',
    main: '主显示器',
  }

  const generateItems = (info: Record<string, any>): DescriptionsProps['items'] => {
    const items: DescriptionsProps['items'] = []
    Object.entries(info).map(([key, value]) => {
      let formattedValue = String(value)

      if (key === 'builtin') {
        formattedValue = value ? '是' : '否'
      } else if (key === 'main') {
        formattedValue = value ? '是' : '否'
      } else if (key === 'currentRefreshRate') {
        formattedValue = `${value} Hz`
      }

      if (key === 'sizeX' || key === 'sizeY') {
        return
      }
      if (key === 'resolutionX' || key === 'resolutionY') {
        return
      }
      if (key === 'currentResX' || key === 'currentResY') {
        return
      }
      if (key === 'positionX' || key === 'positionY') {
        return
      }
      items.push({
        label: labelMap[key] || key.charAt(0).toUpperCase() + key.slice(1),
        span: { sm: 2, xl: 2 },
        children: formattedValue,
      })
    })
    if ('sizeX' in info && 'sizeY' in info) {
      const sizeX = info.sizeX
      const sizeY = info.sizeY
      items.push({
        label: '屏幕尺寸',
        span: { sm: 2, xl: 2 },
        children: `${sizeX} * ${sizeY} 厘米`,
      })
    }
    if ('resolutionX' in info && 'resolutionY' in info) {
      const resolutionX = info.resolutionX
      const resolutionY = info.resolutionY
      items.push({
        label: '屏幕分辨率',
        span: { sm: 2, xl: 2 },
        children: `${resolutionX} * ${resolutionY}`,
      })
    }
    if ('currentResX' in info && 'currentResY' in info) {
      const currentResX = info.currentResX
      const currentResY = info.currentResY
      items.push({
        label: '屏幕当前分辨率',
        span: { sm: 2, xl: 2 },
        children: `${currentResX} * ${currentResY}`,
      })
    }
    if ('positionX' in info && 'positionY' in info) {
      const positionX = info.positionX
      const positionY = info.positionY
      items.push({
        label: '屏幕位置',
        span: { sm: 2, xl: 2 },
        children: `${positionX} * ${positionY}`,
      })
    }

    return items
  }

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
