/**
 * @description 电池信息类型
 * @property designedCapacity - 电池设计容量（毫瓦时/mWh）
 * @property maxCapacity - 电池最大容量（毫瓦时/mWh）
 * @property currentCapacity - 电池当前容量
 * @property capacityUnit - 容量单位
 * @property manufacturer - 制造商
 * @property percent - 电池电量百分比
 * @property isCharging - 是否正在充电
 * @property voltage - 电池电压（V）
 * @property acConnected - 是否连接交流电源
 */
export type batteryType = {
  /**
   * @property designedCapacity - 电池设计容量(毫瓦时/mWh)
   * @type {number}
   */
  designedCapacity: number

  /**
   * @param maxCapacity - 电池最大容量(毫瓦时/mWh)
   * @type {number}
   */
  maxCapacity: number

  /**
   * @param currentCapacity - 电池电流容量
   * @type {number}
   */
  currentCapacity: number

  /**
   * @param capacityUnit - 容量单位
   * @type {string}
   */
  capacityUnit: string

  /**
   * @param manufacturer - 制造商
   * @type {string}
   */
  manufacturer: string

  /**
   * @param percent - 电池百分比
   * @type {number}
   */
  percent: number

  /**
   * @param isCharging - 充电状态
   * @type {boolean}
   */
  isCharging: boolean

  /**
   * @param voltage - 电池电流电压(V)
   * @type {number}
   */
  voltage: number

  /**
   * @param acConnected - 交流电连接状态
   * @type {boolean}
   */
  acConnected: boolean
}
