/**
 * @description 硬盘类型
 * @property device - 设备
 * @property name - 名称
 * @property vendor - 制造商
 * @property type - 硬盘类型
 * @property size - 大小
 * @property firmwareRevision - 固件版本
 * @property serialNum - 序列号
 * @property smartStatus - 硬盘状态
 */
export interface diskType {
  /**
   * @property device - 设备
   * @type {string}
   */
  device: string

  /**
   * @property name - 名称
   * @type {string}
   */
  name: string

  /**
   * @property vendor - 制造商
   * @type {string}
   */
  vendor: string

  /**
   * @property type - 硬盘类型
   * @type {string}
   */
  type: string

  /**
   * @property size - 大小
   * @type {number}
   */
  size: number

  /**
   * @property firmwareRevision - 固件版本
   * @type {string}
   */
  firmwareRevision: string

  /**
   * @property serialNum - 序列号
   * @type {string}
   */
  serialNum: string

  /**
   * @property smartStatus - 硬盘状态
   * @type {string}
   */
  smartStatus: string
}
