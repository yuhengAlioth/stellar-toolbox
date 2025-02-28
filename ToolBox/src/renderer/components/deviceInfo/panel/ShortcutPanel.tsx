import { BatteryWorkingOne, Earth, Power, Refresh } from '@icon-park/react'
import type { NotificationArgsProps } from 'antd'
import { Badge, Button, Flex, notification, Tag } from 'antd'
import { useEffect, useState } from 'react'

type NotificationPlacement = NotificationArgsProps['placement']

/**
 * @abstract 设备信息 - 快捷功能卡片
 */
export default function ShortcutPanel() {
  const [api, contextHolder] = notification.useNotification()
  const [error, setError] = useState<Error | null>(null)
  const [isCharging, setIsChargingData] = useState<boolean>()
  const [isConnected, setIsConnectedData] = useState<boolean>()
  const [percent, setPercentData] = useState<number>()

  const openNotification = (placement: NotificationPlacement) => {
    api.warning({
      message: `功能开发中`,
      description: '',
      placement,
    })
  }
  const fetchDiskData = async () => {
    try {
      // 获取电池信息
      const battery = await window.api.batteryInfo()
      setIsChargingData(battery.isCharging)
      setPercentData(battery.percent)
      setIsConnectedData(battery.acConnected)
    } catch (err) {
      if (err instanceof Error) {
        // 确保 err 是 Error 类型
        setError(err)
      } else {
        // 将非 Error 类型的错误转换为 Error 对象
        setError(new Error(String(err)))
      }
    }
  }
  useEffect(() => {
    fetchDiskData()
  }, [])

  const batteryNotification = (placement: NotificationPlacement) => {
    {
      error
        ? api.error({
            message: '获取电量信息失败',
            description: error.message,
            placement,
          })
        : api.open({
            message: '电量信息',
            description: (
              <>
                <p className={isCharging ? 'text-green-500' : 'text-orange-500'}>
                  <span>电池：</span>
                  {isCharging ? (
                    <>
                      <Badge style={{ width: 20, height: 20 }} status="success" />
                      <span>充电中</span>
                    </>
                  ) : (
                    <>
                      <Badge style={{ width: 20, height: 20 }} status="warning" />
                      <span>未充电</span>
                    </>
                  )}
                </p>
                <p className="text-blue-500">
                  电量：
                  <Tag bordered={false} color="blue">
                    {percent}%
                  </Tag>
                </p>
                <p className={isConnected ? 'text-green-500' : 'text-orange-500'}>
                  <span>电源：</span>
                  {isConnected ? (
                    <>
                      <Badge style={{ width: 20, height: 20 }} status="success" />
                      <span>已连接</span>
                    </>
                  ) : (
                    <>
                      <Badge style={{ width: 20, height: 20 }} status="warning" />
                      <span>未连接</span>
                    </>
                  )}
                </p>
              </>
            ),
            icon: <BatteryWorkingOne style={{ color: '#108ee9' }} />,
            placement,
            closeIcon: false,
            showProgress: true,
            duration: 2,
          })
    }
  }

  return (
    <div style={{ height: 290, overflowY: 'auto', scrollbarWidth: 'none' }}>
      {/* 通知提醒框 */}
      {contextHolder}
      <Flex gap="small" wrap justify="space-evenly" align="center">
        <Button
          color="primary"
          variant="outlined"
          style={{ flexDirection: 'column', alignItems: 'center', width: 72, height: 72 }}
          onClick={() => batteryNotification('bottomRight')}
          icon={<BatteryWorkingOne size="24" />}>
          电量
        </Button>
        <Button
          color="cyan"
          variant="outlined"
          style={{ flexDirection: 'column', alignItems: 'center', width: 72, height: 72 }}
          onClick={() => openNotification('bottomRight')}
          icon={<Earth size="24" />}>
          网络
        </Button>
        <Button
          color="purple"
          variant="outlined"
          style={{ flexDirection: 'column', alignItems: 'center', width: 72, height: 72 }}
          onClick={() => openNotification('bottomRight')}
          icon={<Refresh size="24" />}>
          重启
        </Button>
        <Button
          color="danger"
          variant="outlined"
          style={{ flexDirection: 'column', alignItems: 'center', width: 72, height: 72 }}
          onClick={() => openNotification('bottomRight')}
          icon={<Power size="24" />}>
          关闭
        </Button>
      </Flex>
    </div>
  )
}
