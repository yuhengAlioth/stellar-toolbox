/**
 * @description 磁盘信息类型
 * @property name - 名称
 * @property identifier - 标识符
 * @property mount - 挂载点
 * @property label - 标签名称
 * @property fsType - 文件系统类型
 * @property uuid - UUID
 * @property physical - 物理模型
 * @property type - 类型
 * @property size - 大小
 * @property removable - 是否移动盘
 */
export interface diskSystemType {
  /**
   * @property name - 名称
   * @type {string}
   */
  name: string

  /**
   * @property identifier - 标识符
   * @type {string}
   */
  identifier: string

  /**
   * @property mount - 挂载点
   * @type {string}
   */
  mount: string

  /**
   * @property label - 标签名称
   * @type {string}
   */
  label: string

  /**
   * @property fsType - 文件系统类型
   * @type {string}
   */
  fsType: string

  /**
   * @property uuid - UUID
   * @type {string}
   */
  uuid: string

  /**
   * @property physical - 物理模型
   * @type {string}
   */
  physical: string

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
   * @property removable - 是否移动盘
   * @type {boolean}
   */
  removable: boolean
}
