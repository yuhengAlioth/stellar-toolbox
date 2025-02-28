/**
 * 硬件页面枚举
 * @readonly
 * @enum
 */
export enum HardwareCardType {
  /**
   * @property 系统信息
   */
  SYSTEM = 'system',
  /**
   * @property 硬件信息
   */
  HARDWARE = 'hardware',
  /**
   * @property CPU信息
   */
  CPU = 'cpu',
  /**
   * @property 内存信息
   */
  MEMORY = 'memory',
  /**
   * @property 硬盘信息
   */
  DISK = 'disk',
  /**
   * @property 磁盘信息
   */
  DISKSYSTEM = 'diskSystem',
  /**
   * @property 图形控制器(显卡)信息
   */
  GRAPHICSCONTROLLERS = 'graphicsControllers',
  /**
   * @property 显示器信息
   */
  DISPLAYS = 'displays',
  /**
   * @property 电池信息
   */
  BATTERY = 'battery',
}
