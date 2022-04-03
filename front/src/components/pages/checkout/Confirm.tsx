import React from 'react'
import {Divider, Typography} from 'antd'
import {UserSubmit} from '../../../types/offer'

type ConfirmProps = {
  userInfor?: UserSubmit
}

const {Title, Text} = Typography
export const Confirm: React.FC<ConfirmProps> = ({userInfor}) => {
  return (
    <div style={{padding: 20}}>
      <Title level={4}>Confirm Information</Title>
      <div>
        <Text strong>{userInfor?.gender === 'male' ? 'Mr: ' : 'Ms: '}</Text>
        <Text>{userInfor?.userName}</Text>
        <Divider/>
        <Text strong>Phone Number: </Text><br/>
        <Text>{userInfor?.phoneNumber}</Text>
        <Divider/>
        <Text strong>Payment: </Text><br/>
        <Text>{userInfor?.paymentMethod === 'online' ? 'Online Gateways' : 'Payment on Check-in'}</Text><br/>
      </div>
    </div>
  )
}
