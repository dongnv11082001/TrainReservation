import React from 'react'
import styled from 'styled-components'
import {List, Typography} from 'antd'
import {Ticket} from '../../../types/ticket'
import {CartTicket} from './CartTicket'
import {useResult} from '../../../context/searchContext'

type OrderProps = {
  incartTickets: Ticket[]
}

const {Text, Title} = Typography

export const Order: React.FC<OrderProps> = ({incartTickets}) => {
  const {passengers} = useResult()

  const totalPrice = incartTickets.reduce((acc, curr) => acc + curr.price, 0)

  return (
    <OrderWrapper>
      <List
        dataSource={incartTickets}
        renderItem={item => {
          return <CartTicket
            key={item.id}
            price={item.price}
            ticketClass={item.ticketClass}
            destination={item.destination}
            arrivalTime={item.arrivalTime}
            departureTime={item.departureTime}
          />
        }}
      />
      <Text>Total Passengers: {passengers}</Text>
      <Title level={3}>Order total: {totalPrice}$</Title>
    </OrderWrapper>
  )
}

const OrderWrapper = styled.div`
  width: 440px;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
`
