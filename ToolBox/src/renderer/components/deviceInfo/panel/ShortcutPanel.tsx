import { BatteryWorkingOne, Earth, Power, Refresh } from '@icon-park/react'
import type { NotificationArgsProps } from 'antd'
import { Button, Flex, notification } from 'antd'

type NotificationPlacement = NotificationArgsProps['placement']

/**
 * @abstract 设备信息 - 快捷功能卡片
 */
export default function ShortcutPanel() {
  const [api, contextHolder] = notification.useNotification()

  const openNotification = (placement: NotificationPlacement) => {
    api.warning({
      message: `功能暂未实现`,
      description: '',
      placement,
    })
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
          onClick={() => openNotification('bottomRight')}
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
