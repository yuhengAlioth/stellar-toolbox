import { Liquid } from '@ant-design/charts'
import convertUtil from '@renderer/utils/convertUtil'
import { Col, Row, Statistic } from 'antd'
import { useEffect, useState } from 'react'

/**
 * @abstract 系统内存状态图
 */
export default function SystemMemoryGraph() {
  const [data, setData] = useState<number>()
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

  const config = {
    percent: data,
    style: {
      outlineBorder: 6,
      outlineDistance: 4,
      waveLength: 70,
      backgroundFill: '#e9f0f6',
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
