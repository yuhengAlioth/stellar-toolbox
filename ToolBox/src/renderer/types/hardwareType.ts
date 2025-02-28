/**
 * @description 硬件类型
 * @property system - 硬件信息
 * @property bios - BIOS信息
 * @property baseboard - 主板信息
 * @property chassis - 机箱信息
 */
export type hardwareType = {
  system: systemInfo
  bios: biosInfo
  baseboard: baseboardInfo
  chassis: chassisInfo
}

/**
 * @description 硬件信息类型
 * @property manufacturer - 制造商
 * @property version - 版本号
 * @property serial - 主机编号
 */
type systemInfo = {
  /**
   * @property manufacturer - 制造商
   * @type {string}
   */
  manufacturer: string

  /**
   * @property version - 版本号
   * @type {string}
   */
  version: string

  /**
   * @property serial - 主机编号
   * @type {string}
   */
  serial: string
}

/**
 * @description BIOS信息类型
 * @property vendor - 制造商
 * @property releaseDate - 发布日期
 */
type biosInfo = {
  /**
   * @property vendor - 制造商
   * @type {string}
   */
  vendor: string

  /**
   * @property releaseDate - 发布日期
   * @type {string}
   */
  releaseDate: string
}

/**
 * @description 主板信息类型
 * @property manufacturer - 制造商
 * @property model - 型号
 * @property serial - 序列号
 * @property version - 版本
 * @property memSlots - 插槽数量
 */
type baseboardInfo = {
  /**
   * @property manufacturer - 制造商
   * @type {string}
   */
  manufacturer: string

  /**
   * @property model - 型号
   * @type {string}
   */
  model: string

  /**
   * @property serial - 序列号
   * @type {string}
   */
  serial: string

  /**
   * @property version - 版本
   * @type {string}
   */
  version: string

  /**
   * @property memSlots - 插槽数量
   * @type {number}
   */
  memSlots: number
}

/**
 * @description 机箱信息类型
 * @property manufacturer - 制造商
 * @property version - 版本
 * @property type - 类型
 * @property serial - 序列号
 */
type chassisInfo = {
  /**
   * @property manufacturer - 制造商
   * @type {string}
   */
  manufacturer: string

  /**
   * @property version - 版本
   * @type {string}
   */
  version: string

  /**
   * @property type - 类型
   * @type {string}
   */
  type: string

  /**
   * @property serial - 序列号
   * @type {string}
   */
  serial: string
}
