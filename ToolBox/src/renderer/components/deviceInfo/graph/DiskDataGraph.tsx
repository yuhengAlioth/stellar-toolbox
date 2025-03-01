import { Pie } from '@ant-design/charts'
import { Alert, Spin } from 'antd'
import { useEffect, useState } from 'react'

/**
 * @abstract 设备信息 - 磁盘总数据图
 */
export default function DiskDataGraph() {
  const [data, setData] = useState([])
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchDiskData = async () => {
    try {
      setIsLoading(true) // 设置加载状态为 true
      // 获取数据
      const info = await window.api.fsSizeInfo()
      const diskData = info.map((disk) => ({
        type: disk.fs + '盘',
        value: disk.use,
      }))
      setData(diskData)
    } catch (err) {
      if (err instanceof Error) {
        // 确保 err 是 Error 类型
        setError(err)
      } else {
        // 将非 Error 类型的错误转换为 Error 对象
        setError(new Error(String(err)))
      }
    } finally {
      setIsLoading(false) // 设置加载状态为 false
    }
  }
  useEffect(() => {
    fetchDiskData()
  }, [])

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
          text: '磁盘\n使用率',
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
    <div style={{ height: 290, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {error ? (
        <Alert message="Error" description={error.message} type="error" showIcon />
      ) : isLoading ? (
        <Spin size="large" /> // 显示加载组件
      ) : (
        <Pie {...config} />
      )}
    </div>
  )
}
