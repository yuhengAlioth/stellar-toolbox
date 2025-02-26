import { Pie } from '@ant-design/charts'

/**
 * @abstract 设备信息 - 磁盘总数据图
 */
export default function DiskDataGraph() {
  const config = {
    data: [
      { type: 'C盘', value: 27 },
      { type: 'D盘', value: 25 },
      { type: 'E盘', value: 18 },
      { type: 'F盘', value: 15 },
      { type: 'G盘', value: 10 },
    ],
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    tooltip: {
      title: 'type',
    },
    label: {
      text: ({ value }) => {
        return `${value}%`
      },
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        position: 'bottom',
      },
    },
    annotations: [
      {
        type: 'text',
        style: {
          text: '磁盘\n占比',
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 30,
          fontStyle: 'bold',
        },
      },
    ],
  }
  return (
    <div style={{ height: 290 }}>
      <Pie {...config} />
    </div>
  )
}
