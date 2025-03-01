import { ipcRenderer } from 'electron'
// 预加载脚本的定制API
const getDeviceInfo = {
  // 关闭窗口
  closeWindow: () => {
    // 发送一个 IPC 消息到主进程
    ipcRenderer.send('close-window')
  },
  /**
   * @abstract 获取磁盘空间信息预加载脚本
   * @returns 返回磁盘空间信息
   */
  async fsSizeInfo() {
    const fsSizeInfo = await ipcRenderer.invoke('get-fsSize')
    return fsSizeInfo
  },
  /**
   * @abstract 获取系统信息预加载脚本
   * @return 总内存、已使用内存、可用内存
   */
  async memInfo() {
    const memInfo = await ipcRenderer.invoke('get-mem')
    return memInfo
  },
  /**
   * @abstract 获取操作系统信息预加载脚本
   * @return 平台、发行版的全称、操作系统版本等信息
   */
  async systemInfo() {
    const systemInfo = await ipcRenderer.invoke('get-system')
    return systemInfo
  },
  /**
   * @abstract 获取硬件信息预加载脚本
   * @return 硬件信息、BIOS信息、主板信息、机箱信息
   */
  async hardwareInfo() {
    const hardwareInfo = await ipcRenderer.invoke('get-hardware')
    return hardwareInfo
  },
  /**
   * @abstract 获取CPU信息预加载脚本
   * @return 品牌、制造商、速度、逻辑核心数等信息
   */
  async cpuInfo() {
    const cpuInfo = await ipcRenderer.invoke('get-cpu')
    return cpuInfo
  },
  /**
   * @abstract 获取系统内存信息预加载脚本
   * @return 品牌、制造商、速度、逻辑核心数等信息
   */
  async memoryInfo() {
    const memoryInfo = await ipcRenderer.invoke('get-memory')
    return memoryInfo
  },
  /**
   * @abstract 获取系统硬盘信息预加载脚本
   * @return 硬盘类型、大小、固件版本、序列号、硬盘状态等信息
   */
  async diskInfo() {
    const diskInfo = await ipcRenderer.invoke('get-disk')
    return diskInfo
  },
  /**
   * @abstract 获取磁盘信息预加载脚本
   * @return 名称、标签名称、文件系统类型、UUID、大小、是否移动盘等信息
   */
  async diskSystemInfo() {
    const diskSystemInfo = await ipcRenderer.invoke('get-disk-system')
    return diskSystemInfo
  },

  /**
   * @abstract 获取显卡信息预加载脚本
   * @return
   */
  async graphicsControllersInfo() {
    const graphicsControllersInfo = await ipcRenderer.invoke('get-graphics')
    return graphicsControllersInfo
  },
  /**
   * @abstract 获取显示器信息预加载脚本
   * @return
   */
  async displaysInfo() {
    const displaysInfo = await ipcRenderer.invoke('get-displays')
    return displaysInfo
  },
  async batteryInfo() {
    // 发送电池信息给渲染进程
    const batteryInfo = await ipcRenderer.invoke('get-battery')
    return batteryInfo
  },
}

export default getDeviceInfo
