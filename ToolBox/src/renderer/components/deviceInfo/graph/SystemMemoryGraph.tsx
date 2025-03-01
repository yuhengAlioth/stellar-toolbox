import { Liquid } from '@ant-design/charts'
import convertUtil from '@renderer/utils/convertUtil'
import { Col, Row, Statistic } from 'antd'
import { useEffect, useState } from 'react'

/**
 * @abstract 系统内存状态图
 */
export default function SystemMemoryGraph() {
  const [data, setData] = useState<number>(0)
  const [displayData, setDisplayData] = useState<number>(0) // 用于显示的百分比值
  const [total, setTotal] = useState<string>()
  const [used, setUsed] = useState<string>()

  const fetchMemData = async () => {
    try {
      // 获取数据
      const info = await window.api.memInfo()
      const total = convertUtil.gbConversion(info.total, 0)
      const used = convertUtil.gbConversion(info.used)
      const percentage = convertUtil.percentageConversion(used, total, 2, true)
      setTotal(`${total}GB`)
      setUsed(`${used}GB`)
      setData(percentage)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    // 初始化时获取一次数据
    fetchMemData()

    // 每隔3秒获取一次数据
    const intervalId = setInterval(fetchMemData, 3000)

    // 清除定时器，防止内存泄漏
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    // 当 data 发生变化时，启动滚动动画
    if (data !== displayData) {
      let start: number | null = null

      const animate = (timestamp: number) => {
        if (!start) start = timestamp
        const elapsed = timestamp - start

        // 计算当前进度
        const progress = Math.min(elapsed / 1000, 1) // 1秒内完成动画
        const currentData = displayData + (data - displayData) * progress

        // 格式化 currentData 为两位小数
        setDisplayData(parseFloat(currentData.toFixed(2)))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [data, displayData])

  const config = {
    percent: displayData,
    style: {
      outlineBorder: 6,
      outlineDistance: 4,
      waveLength: 70,
      backgroundFill: '#e9f0f6',
      textFill: '#21072a',
    },
  }
  return (
    <>
      <div style={{ height: 240 }}>
        <Liquid {...config} />
      </div>
      <Row>
        <Col span={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Statistic title="本机内存" value={total} />
        </Col>
        <Col span={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Statistic title="已用内存" value={used} />
        </Col>
      </Row>
    </>
  )
}
