import {
  BatteryWorkingOne,
  Computer,
  Cpu,
  Disk,
  Hdd,
  Microscope,
  MonitorOne,
  SolidStateDisk,
  System,
} from '@icon-park/react'
import { batteryType } from '@renderer/types/batteryType'
import { cpuType } from '@renderer/types/cpuType'
import { diskSystemType } from '@renderer/types/diskSystemType'
import { diskType } from '@renderer/types/diskType'
import { displaysType } from '@renderer/types/displaysType'
import { graphicsControllerType } from '@renderer/types/graphicsControllerType'
import { HardwareCardType } from '@renderer/types/HardwareCardType'
import { hardwareType } from '@renderer/types/hardwareType'
import { memoryType } from '@renderer/types/memoryType'
import { systemType } from '@renderer/types/systemType'
import { Card, Flex } from 'antd'
import { useEffect, useState } from 'react'
import BatteryModal from '../modalWindow/BatteryModal'
import CpuModal from '../modalWindow/CpuModal'
import DiskModal from '../modalWindow/DiskModal'
import DiskSystemModal from '../modalWindow/DiskSystemModal'
import DisplaysModal from '../modalWindow/DisplaysModal'
import GraphicsControllerModal from '../modalWindow/GraphicsControllerModal'
import HardwareModal from '../modalWindow/HardwareModal'
import MemoryModal from '../modalWindow/MemoryModal'
import SystemModal from '../modalWindow/SystemModal'

const { Meta } = Card
/**
 * @abstract 设备信息 - 硬件配置信息卡片
 */
export default function HardwareInfoPanel() {
  const [open, setOpen] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [selectedType, setSelectedType] = useState<HardwareCardType | null>(null)
  const [systemData, setSystemData] = useState<systemType>()
  const [hardwareData, setHardwareData] = useState<hardwareType>()
  const [cpuData, setCpuData] = useState<cpuType>()
  const [memoryData, setMemoryData] = useState<memoryType>()
  const [diskData, setDiskData] = useState<diskType>()
  const [diskSystemData, setDiskSystemData] = useState<diskSystemType>()
  const [graphicsControllerData, setGraphicsControllerData] = useState<graphicsControllerType>()
  const [displaysData, setDisplaysData] = useState<displaysType>()
  const [batteryData, setBatteryData] = useState<batteryType>()
  const fetchDiskData = async () => {
    try {
      // 获取数据
      const system = await window.api.systemInfo()
      const hardware = await window.api.hardwareInfo()
      const cpu = await window.api.cpuInfo()
      const memory = await window.api.memoryInfo()
      const disk = await window.api.diskInfo()
      const diskSystem = await window.api.diskSystemInfo()
      const graphicsControllers = await window.api.graphicsControllersInfo()
      const displays = await window.api.displaysInfo()
      const battery = await window.api.batteryInfo()
      setSystemData(system)
      setHardwareData(hardware)
      setCpuData(cpu)
      setMemoryData(memory)
      setDiskData(disk)
      setDiskSystemData(diskSystem)
      setGraphicsControllerData(graphicsControllers)
      setDisplaysData(displays)
      setBatteryData(battery)
    } catch (err) {
      if (err instanceof Error) {
        // 确保 err 是 Error 类型
        setError(err)
      } else {
        // 将非 Error 类型的错误转换为 Error 对象
        setError(new Error(String(err)))
      }
    }
  }
  useEffect(() => {
    fetchDiskData()
  }, [])

  const showModal = (type: HardwareCardType) => {
    setSelectedType(type)
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }
  return (
    <div style={{ height: 290, overflowY: 'auto', padding: 5 }}>
      <Flex gap="small" wrap align="center">
        <Card hoverable={true} className="w-54 h-24" onClick={() => showModal(HardwareCardType.SYSTEM)}>
          <Meta avatar={<System size="24" />} title="系统" description="检测系统信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24" onClick={() => showModal(HardwareCardType.HARDWARE)}>
          <Meta avatar={<Computer size="24" />} title="硬件" description="检测硬件信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24" onClick={() => showModal(HardwareCardType.CPU)}>
          <Meta avatar={<Cpu size="24" />} title="CPU" description="检测CPU信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24" onClick={() => showModal(HardwareCardType.MEMORY)}>
          <Meta avatar={<Hdd size="24" />} title="内存" description="检测内存信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24" onClick={() => showModal(HardwareCardType.DISK)}>
          <Meta avatar={<SolidStateDisk size="24" />} title="硬盘" description="检测硬盘信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24" onClick={() => showModal(HardwareCardType.DISKSYSTEM)}>
          <Meta avatar={<Disk size="24" />} title="磁盘" description="检测磁盘信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24" onClick={() => showModal(HardwareCardType.GRAPHICSCONTROLLERS)}>
          <Meta avatar={<Microscope size="24" />} title="显卡" description="检测显卡信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24" onClick={() => showModal(HardwareCardType.DISPLAYS)}>
          <Meta avatar={<MonitorOne size="24" />} title="显示器" description="检测显示器信息" />
        </Card>
        <Card hoverable={true} className="w-54 h-24" onClick={() => showModal(HardwareCardType.BATTERY)}>
          <Meta avatar={<BatteryWorkingOne size="24" />} title="电池" description="检测电池器信息" />
        </Card>
      </Flex>
      {open && selectedType === HardwareCardType.SYSTEM && systemData && (
        <SystemModal open={open} data={systemData} onCancel={handleCancel} error={error} />
      )}
      {open && selectedType === HardwareCardType.HARDWARE && hardwareData && (
        <HardwareModal open={open} data={hardwareData} onCancel={handleCancel} error={error} />
      )}
      {open && selectedType === HardwareCardType.CPU && cpuData && (
        <CpuModal open={open} data={cpuData} onCancel={handleCancel} error={error} />
      )}
      {open && selectedType === HardwareCardType.MEMORY && memoryData && (
        <MemoryModal open={open} data={memoryData} onCancel={handleCancel} error={error} />
      )}
      {open && selectedType === HardwareCardType.DISK && diskData && (
        <DiskModal open={open} data={diskData} onCancel={handleCancel} error={error} />
      )}
      {open && selectedType === HardwareCardType.DISKSYSTEM && diskSystemData && (
        <DiskSystemModal open={open} data={diskSystemData} onCancel={handleCancel} error={error} />
      )}
      {open && selectedType === HardwareCardType.GRAPHICSCONTROLLERS && graphicsControllerData && (
        <GraphicsControllerModal open={open} data={graphicsControllerData} onCancel={handleCancel} error={error} />
      )}
      {open && selectedType === HardwareCardType.DISPLAYS && displaysData && (
        <DisplaysModal open={open} data={displaysData} onCancel={handleCancel} error={error} />
      )}
      {open && selectedType === HardwareCardType.BATTERY && batteryData && (
        <BatteryModal open={open} data={batteryData} onCancel={handleCancel} error={error} />
      )}
    </div>
  )
}
