import { Flex, Modal } from 'antd'
import SingleDiskGraph from '../graph/SingleDiskGraph'

interface DiskModalProps {
  open: boolean
  onCancel: () => void
  data: { diskName: string; diskData: { type: string; value: number }[] }[]
}
/**
 * @abstract 设备信息 - 磁盘空间占比信息弹窗
 */
export default function DiskModal({ data, open, onCancel }: DiskModalProps) {
  return (
    <>
      <Modal
        open={open}
        centered
        title="磁盘详情"
        className="rounded-md w-full h-3/5 overflow-y-auto"
        style={{ scrollbarWidth: 'none' }}
        onCancel={onCancel}
        footer={null}>
        <Flex gap="small" wrap justify="space-evenly" align="center">
          {data.map((item, index) => (
            <SingleDiskGraph key={index} data={item.diskData} diskName={item.diskName} />
          ))}
        </Flex>
      </Modal>
    </>
  )
}
