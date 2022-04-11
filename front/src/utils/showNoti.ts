import {notification} from 'antd'

export const showNoti = (type: 'success' | 'warning' | 'error' | 'info', message: string) => {
  notification[type]({
    message: message,
  })
}