/**
 * @description 图形控制器(显卡)类型
 * @property vendor - 制造商
 * @property model - 图形控制器模型名称
 * @property subDeviceId - 子设备ID
 * @property bus - 总线
 * @property vram - 影像随机接达记忆器(显存)
 * @property vramDynamic - 显存动态
 */
export interface graphicsControllerType {
  /**
   * @property vendor - 制造商
   * @type {string}
   */
  vendor: string

  /**
   * @property model - 图形控制器模型名称
   * @type {string}
   */
  model: string

  /**
   * @property subDeviceId - 子设备ID
   * @type {string}
   */
  subDeviceId: string

  /**
   * @property bus - 总线
   * @type {string}
   */
  bus: string

  /**
   * @property vram - 影像随机接达记忆器(显存)
   * @type {number}
   */
  vram: number

  /**
   * @property vramDynamic - 显存动态
   * @type {boolean}
   */
  vramDynamic: boolean
}
