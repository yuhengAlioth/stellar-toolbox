import { systemType } from '@renderer/types/systemType'
import type { DescriptionsProps } from 'antd'
import { Alert, Descriptions, Flex, Modal } from 'antd'

interface SystemModalProps {
  open: boolean
  onCancel: () => void
  data: systemType
  error?: Error | null
}
/**
 * @abstract 设备信息 - 系统信息弹窗
 */
export default function SystemModal({ open, onCancel, data, error }: SystemModalProps) {
  const items: DescriptionsProps['items'] = [
    {
      label: '平台',
      children: data.platform,
    },
    {
      label: '版本名称',
      children: data.distro,
    },
    {
      label: '发行版本',
      children: data.release,
    },
    {
      label: '内核版本',
      children: data.kernel,
    },
    {
      label: '序列号',
      span: { sm: 2, xl: 2 },
      children: data.serial,
    },
    {
      label: '架构',
      children: data.arch,
    },
    {
      label: '主机名',
      children: data.hostname,
    },
    {
      label: '全限定域名',
      children: data.fqdn,
    },
  ]

  return (
    <>
      <Modal
        open={open}
        centered
        title="系统详情"
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
