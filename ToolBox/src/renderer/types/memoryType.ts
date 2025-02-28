/**
 * @description 内存类型
 * @property bank - 编号
 * @property manufacturer - 厂商
 * @property type - 类型
 * @property size - 大小
 * @property clockSpeed - 频率
 */
export type memoryType = {
  /**
   * @property bank - 编号
   * @type {string}
   */
  bank: string

  /**
   * @property manufacturer - 厂商
   * @type {string}
   */
  manufacturer: string

  /**
   * @property type - 类型
   * @type {string}
   */
  type: string

  /**
   * @property size - 大小
   * @type {number}
   */
  size: number

  /**
   * @property clockSpeed - 频率
   * @type {number}
   */
  clockSpeed: number
}
