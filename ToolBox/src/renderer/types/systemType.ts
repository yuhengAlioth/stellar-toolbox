/**
 * @description 系统信息类型
 * @property platform - 平台
 * @property distro - 版本名称
 * @property release - 发行版本
 * @property kernel - 内核版本
 * @property serial - 序列号
 * @property arch - 架构
 * @property hostname - 主机名
 * @property fqdn - 全限定域名
 */
export type systemType = {
  /**
   * @property platform - 平台
   * @type {string}
   */
  platform: string

  /**
   * @property distro - 版本名称
   * @type {string}
   */
  distro: string

  /**
   * @property release - 发行版本
   * @type {string}
   */
  release: string

  /**
   * @property kernel - 内核版本
   * @type {string}
   */
  kernel: string

  /**
   * @property serial - 序列号
   * @type {string}
   */
  serial: string

  /**
   * @property arch - 架构
   * @type {string}
   */
  arch: string

  /**
   * @property hostname - 主机名
   * @type {string}
   */
  hostname: string

  /**
   * @property fqdn - 全限定域名
   * @type {string}
   */
  fqdn: string
}
