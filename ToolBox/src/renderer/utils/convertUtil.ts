/**
 * @class 转换工具类
 */
class ConvertUtil {
  /**
   * @property 字节转换GB函数
   * @param bytes 字节
   * 要转换的字节数，可以是任意非负整数
   * @param decimals 小数位数，默认为1
   * 指定转换后GB数值的小数位数，用于控制精度
   * @returns 返回转换后的GB数值，保留指定的小数位数
   */
  gbConversion = (bytes: number, decimals: number = 1): number => {
    return parseFloat((bytes / 1024 / 1024 / 1024).toFixed(decimals))
  }

  /**
   * @property 转换百分比函数
   * @abstract 该函数用于计算两个数字之间的百分比，并将结果四舍五入到指定的小数位数
   * 主要用途是简化百分比计算过程，提供精确的小数控制
   * @param a - 分子，表示部分的数值
   * @param b - 分母，表示整体的数值，函数内部会进行除法运算，因此b不应为0
   * @param decimals - 可选参数，表示结果保留的小数位数，默认为0没有小数
   * @param isOn - 可选参数，表示是否返回小数，默认为false，返回百分数，如果为true，则返回小数
   * @returns 返回计算后的百分比，四舍五入到指定的小数位数
   */
  percentageConversion = (a: number, b: number, decimals: number = 0, isOn: boolean = false): number => {
    if (isOn) {
      return parseFloat((a / b).toFixed(decimals))
    }
    return parseFloat(((a / b) * 100).toFixed(decimals))
  }

  /**
   * @property 字节大小带单位转换函数
   * @param bytes 字节
   * 要转换的字节数，可以是任意非负整数
   * @returns 返回转换后的带单位的值，保留2位小数位数
   */
  formatSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i]
  }
}

const convertUtil = new ConvertUtil()
export default convertUtil
