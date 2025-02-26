import { Liquid } from '@ant-design/charts'

/**
 * @abstract 系统内存状态图
 */
export default function SystemMemoryGraph() {
  const config = {
    percent: 0.5,
    style: {
      outlineBorder: 6,
      outlineDistance: 4,
      waveLength: 70,
    },
  }
  return (
    <div style={{ height: 290 }}>
      <Liquid {...config} />
    </div>
  )
}
