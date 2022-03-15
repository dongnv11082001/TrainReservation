import React from 'react'
import styled from 'styled-components'
import {Avatar, List, Skeleton, Typography} from 'antd'
import {TicketProps} from '../../../types/ticket'
import {FlexBox} from '../../modules/ComonLayout'

type ResultTicketProps = {
  ticket: TicketProps
  loading: boolean
}

const {Text} = Typography

export const ResultTicket: React.FC<ResultTicketProps> = ({ticket, loading}) => {
  return <Ticket
    key={ticket.id}
    extra={
      !loading &&
        <Box>
          <Text style={{fontSize: '20px', fontWeight: 'bold'}}>${ticket.price}</Text>
          <Button>Chọn</Button>
        </Box>
    }>
    <Skeleton loading={loading} active avatar>
      <List.Item.Meta
        avatar={<Avatar src='https://joeschmoe.io/api/v1/random'/>}
        title="Vé xịn giá shock"
        description='Dark dark burh burh lamo lmao'
      />
      This is dummy text this is dummy text this is dummy text
    </Skeleton>
  </Ticket>
}

const Box = styled(FlexBox)`
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  gap: 5px;
`
const Ticket = styled(List.Item)`
  background: white;
  border-radius: .6rem;
  margin-bottom: 18px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: outline 0.2s ease;
  padding: 20px !important;
  
  :hover{
    outline: 1px solid #55b7f3;
    transition: outline 0.2s ease;
  }
`
const Button = styled(FlexBox)`
  cursor: pointer;
  background: #55b7f3;
  width:80px;
  padding: 7px 10px;
  border-radius: .6rem;
  color: white;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
`