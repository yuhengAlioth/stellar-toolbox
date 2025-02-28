/**
 * @description 显示器类型
 * @property vendor - 供应商
 * @property model - 型号
 * @property deviceName - 设备名称
 * @property sizeX - 屏幕尺寸X
 * @property sizeY - 屏幕尺寸Y
 * @property pixelDepth - 像素深度
 * @property resolutionX - 屏幕分辨率X
 * @property resolutionY - 屏幕分辨率Y
 * @property currentResX - 屏幕当前分辨率X
 * @property currentResY - 屏幕当前分辨率Y
 * @property positionX - 屏幕位置X
 * @property positionY - 屏幕位置Y
 * @property currentRefreshRate - 屏幕刷新率
 * @property connection - 连接方式
 * @property builtin - 内置显示器
 * @property main - 主显示器
 */
export interface displaysType {
  /**
   * @property vendor - 供应商
   * @type {string}
   */
  vendor: string

  /**
   * @property model - 型号
   * @type {string}
   */
  model: string

  /**
   * @property deviceName - 设备名称
   * @type {string}
   */
  deviceName: string

  /**
   * @property sizeX - 屏幕尺寸X
   * @type {number}
   */
  sizeX: number

  /**
   * @property sizeY - 屏幕尺寸Y
   * @type {number}
   */
  sizeY: number

  /**
   * @property pixelDepth - 像素深度
   * @type {number}
   */
  pixelDepth: number

  /**
   * @property resolutionX - 屏幕分辨率X
   * @type {number}
   */
  resolutionX: number

  /**
   * @property resolutionY - 屏幕分辨率Y
   * @type {number}
   */
  resolutionY: number

  /**
   * @property currentResX - 屏幕当前分辨率X
   * @type {number}
   */
  currentResX: number

  /**
   * @property currentResY - 屏幕当前分辨率Y
   * @type {number}
   */
  currentResY: number

  /**
   * @property positionX - 屏幕位置X
   * @type {number}
   */
  positionX: number

  /**
   * @property positionY - 屏幕位置Y
   * @type {number}
   */
  positionY: number

  /**
   * @property currentRefreshRate - 屏幕刷新率
   * @type {number}
   */
  currentRefreshRate: number

  /**
   * @property connection - 连接方式
   * @type {string}
   */
  connection: string

  /**
   * @property builtin - 内置显示器
   * @type {boolean}
   */
  builtin: boolean

  /**
   * @property main - 主显示器
   * @type {boolean}
   */
  main: boolean
}
