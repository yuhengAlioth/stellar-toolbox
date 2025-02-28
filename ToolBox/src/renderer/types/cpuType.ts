/**
 * @description CPU信息类型
 * @property brand - cpu品牌
 * @property manufacturer - cpu制造商
 * @property vendor - cpu供应商
 * @property speed - cpu速度
 * @property speedMin - cpu最小速度
 * @property speedMax - cpu最大速度
 * @property cores - cpu逻辑核心数
 * @property physicalCores - cpu物理核心数
 * @property processors - cpu处理器个数
 * @property virtualization - cpu是否支持虚拟化
 */
export type cpuType = {
  /**
   * @property brand - cpu品牌
   * @type {string}
   */
  brand: string

  /**
   * @property manufacturer - cpu制造商
   * @type {string}
   */
  manufacturer: string

  /**
   * @property vendor - cpu供应商
   * @type {string}
   */
  vendor: string

  /**
   * @property speed - cpu速度
   * @type {number}
   */
  speed: number

  /**
   * @property speedMin - cpu最小速度
   * @type {number}
   */
  speedMin: number

  /**
   * @property speedMax - cpu最大速度
   * @type {number}
   */
  speedMax: number

  /**
   * @property cores - cpu逻辑核心数
   * @type {number}
   */
  cores: number

  /**
   * @property physicalCores - cpu物理核心数
   * @type {number}
   */
  physicalCores: number

  /**
   * @property processors - cpu处理器个数
   * @type {number}
   */
  processors: number

  /**
   * @property virtualization - cpu是否支持虚拟化
   * @type {boolean}
   */
  virtualization: boolean
}
