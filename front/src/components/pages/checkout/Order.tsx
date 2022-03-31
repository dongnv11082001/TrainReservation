import React from 'react'
import styled from 'styled-components'
import {List} from 'antd'
import {Ticket} from '../../../types/ticket'
import {CartTicket} from './CartTicket'

type OrderProps = {
  incartTickets: Ticket[]
}

export const Order: React.FC<OrderProps> = ({incartTickets}) => {
  const totalPrice = incartTickets.reduce((acc, curr) => acc + curr.price, 0)

  return (
    <OrderWrapper>
      <h2>Order total: {totalPrice}$</h2>
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
    </OrderWrapper>
  )
}

const OrderWrapper = styled.div`
  width: 440px;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
`
