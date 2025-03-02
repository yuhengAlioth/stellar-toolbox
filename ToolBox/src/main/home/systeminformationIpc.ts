import { ipcMain } from 'electron'
import si from 'systeminformation'

/**
 * @abstract 获取设备信息
 */
export default () => {
  /**
   * @abstract 获取磁盘信息
   */
  ipcMain.handle('get-fsSize', async () => {
    const data = await si.get({
      // 磁盘大小: 文件系统名称 文件系统类型 大小 已使用大小 可用大小 已使用百分比 读写权限
      fsSize: 'fs,type,size,used,available,use,rw',
    })
    return data.fsSize
  })
  /**
   * @abstract 获取系统内存占用信息
   */
  ipcMain.handle('get-mem', async () => {
    const data = await si.get({
      // 内存信息: 总内存 已使用内存 可用内存
      mem: 'total,used,available,active',
    })
    return data.mem
  })
  /**
   * @abstract 获取操作系统信息
   */
  ipcMain.handle('get-system', async () => {
    const data = await si.get({
      // 系统信息: 平台 发行版的全称 操作系统版本 内核版本号 序列号 系统架构 主机名 全限定域名 检测Hyper-v(仅限win)
      osInfo: 'platform,distro, release,kernel,serial,arch,hostname,fqdn,hypervizor',
    })
    return data.osInfo
  })
  /**
   * @abstract 获取硬件信息
   */
  ipcMain.handle('get-hardware', async () => {
    const data = await si.get({
      // 硬件信息: 制造商 版本 序列号
      system: 'manufacturer,version,serial',
      // BIOS信息: 供应商 发布日期
      bios: 'vendor,releaseDate',
      // 主板信息: 制造商 型号 序列号 版本 插槽数量
      baseboard: 'manufacturer,model,serial,version,memSlots',
      // 机箱信息: 制造商 版本 类型 序列号
      chassis: 'manufacturer,version,type,serial',
    })
    return data
  })
  /**
   * @abstract 获取cpu信息
   */
  ipcMain.handle('get-cpu', async () => {
    const data = await si.get({
      // cpu: 品牌 制造商 供应商 速度 最小速度 最大速度 逻辑核心数 物理核心 处理器 是否支持虚拟化
      cpu: 'brand,manufacturer,vendor,speed,speedMin,speedMax,cores,physicalCores,processors,virtualization',
    })
    return data.cpu
  })
  /**
   * @abstract 获取内存信息
   */
  ipcMain.handle('get-memory', async () => {
    const data = await si.get({
      // 内存信息: 编号 厂商 类型 大小 频率
      memLayout: 'bank,manufacturer,type,size,clockSpeed',
    })
    return data.memLayout
  })
  /**
   * @abstract 获取硬盘信息
   */
  ipcMain.handle('get-disk', async () => {
    const data = await si.get({
      // 硬盘信息: 设备 名称 制造商 硬盘类型 大小 固件版本 序列号 硬盘状态
      diskLayout: 'device,name,vendor,type,size,firmwareRevision,serialNum,smartStatus',
    })
    return data.diskLayout
  })
  /**
   * @abstract 获取磁盘信息
   */
  ipcMain.handle('get-disk-system', async () => {
    const data = await si.get({
      // 磁盘信息: 名称 标识符 挂载点 标签名称 文件系统类型 UUID 物理模型 类型 大小 是否移动盘
      blockDevices: 'name,identifier,mount,label,fsType,uuid,physical,type,size,removable,',
    })
    return data.blockDevices
  })
  /**
   * @abstract 图形控制器-显卡
   */
  ipcMain.handle('get-graphics', async () => {
    const data = await si.get({
      graphics: 'controllers',
    })
    return data.graphics.controllers
  })
  /**
   * @abstract 显示器
   */
  ipcMain.handle('get-displays', async () => {
    const data = await si.get({
      graphics: 'displays',
    })
    return data.graphics.displays
  })

  // 获取电池信息
  ipcMain.handle('get-battery', async () => {
    const data = await si.get({
      // 电池信息: 交流电连接状态 容量单位 电池电流容量 电池设计容量(毫瓦时/mWh) 电池最大容量 充电状态 制造商 电池百分比 电池电流电压(V)
      battery:
        'acConnected,capacityUnit,currentCapacity,designedCapacity,maxCapacity,isCharging,manufacturer,percent,voltage',
    })
    return data.battery
  })
}
