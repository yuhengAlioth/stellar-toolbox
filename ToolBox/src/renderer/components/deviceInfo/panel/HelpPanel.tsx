import { Info, UpdateRotation, WebPage } from '@icon-park/react'
import { Button, Flex, notification, NotificationArgsProps } from 'antd'

type NotificationPlacement = NotificationArgsProps['placement']
/**
 * @abstract 设备信息 - 帮助卡片
 */
export default function HelpPanel() {
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
          variant="solid"
          className="w-full"
          style={{ height: 72 }}
          onClick={() => openNotification('bottomRight')}
          icon={<UpdateRotation size="24" />}>
          检查更新
        </Button>
        <Button
          color="orange"
          variant="solid"
          className="w-5/12"
          style={{ height: 72 }}
          onClick={() => openNotification('bottomRight')}
          icon={<WebPage size="24" />}>
          官网
        </Button>
        <Button
          color="orange"
          variant="solid"
          className="w-5/12"
          style={{ height: 72 }}
          onClick={() => openNotification('bottomRight')}
          icon={<Info size="24" />}>
          关于
        </Button>
      </Flex>
    </div>
  )
}
