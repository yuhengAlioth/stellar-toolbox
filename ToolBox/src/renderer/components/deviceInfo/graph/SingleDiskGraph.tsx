import { Pie } from '@ant-design/charts'

/**
 * @abstract 设备信息 - 单个磁盘数据图
 */

// eslint-disable-next-line react/prop-types
export default function SingleDiskGraph({ data, diskName }) {
  const config = {
    data: data,
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
          text: `${diskName}`,
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
    <div className="w-full" style={{ height: 250 }}>
      <Pie {...config} />
    </div>
  )
}
