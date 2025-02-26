import type { DescriptionsProps } from 'antd'
import { Descriptions, Flex, Modal } from 'antd'

interface DiskModalProps {
  open: boolean
  onCancel: () => void
  // data: { diskName: string; diskData: { type: string; value: number }[] }[]
}
/**
 * @abstract 设备信息 - 硬件信息弹窗
 */
export default function HardwareModal({ open, onCancel }: DiskModalProps) {
  const items: DescriptionsProps['items'] = [
    {
      label: '平台',
      children: 'Windows',
    },
    {
      label: '版本名称',
      children: 'Microsoft Windows 11 Pro',
    },
    {
      label: '发行版本',
      children: '10.0.26100',
    },
    {
      label: '内核版本',
      children: '10.0.26100',
    },
    {
      label: '序列号',
      span: { xl: 2, xxl: 2 },
      children: '00000-00000-00000-00000',
    },
    {
      label: '架构',
      children: 'x64',
    },
    {
      label: '主机名',
      children: 'admin',
    },
    {
      label: '全限定域名',
      children: 'ADMIN',
    },
  ]
  return (
    <>
      <Modal
        open={open}
        centered
        title="详情"
        className="rounded-md h-3/5 overflow-y-auto"
        style={{ scrollbarWidth: 'none' }}
        width={1000}
        onCancel={onCancel}
        footer={null}>
        <Flex gap="small" wrap justify="space-evenly" align="center">
          <Descriptions
            // title="Responsive Descriptions"
            bordered
            items={items}
          />
        </Flex>
      </Modal>
    </>
  )
}
