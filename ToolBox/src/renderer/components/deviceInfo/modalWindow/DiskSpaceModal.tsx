import { Alert, Flex, Modal } from 'antd'
import SingleDiskGraph from '../graph/SingleDiskGraph'

interface DiskSpaceModalProps {
  open: boolean
  onCancel: () => void
  data: { diskName: string; diskData: { type: string; value: number }[] }[]
  error?: Error | null
}
/**
 * @abstract 设备信息 - 磁盘空间占比信息弹窗
 */
export default function DiskSpaceModal({ data, open, onCancel, error }: DiskSpaceModalProps) {
  return (
    <>
      <Modal
        open={open}
        centered
        title="磁盘空间详情"
        className="rounded-md w-full h-3/5 overflow-y-auto"
        style={{ scrollbarWidth: 'none' }}
        onCancel={onCancel}
        footer={null}>
        <Flex gap="small" wrap justify="space-evenly" align="center">
          {error ? (
            <Alert message="Error" description={error.message} type="error" showIcon />
          ) : (
            data.map((item, index) => <SingleDiskGraph key={index} data={item.diskData} diskName={item.diskName} />)
          )}
        </Flex>
      </Modal>
    </>
  )
}
