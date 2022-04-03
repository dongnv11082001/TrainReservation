import React from 'react'
import styled from 'styled-components'
import {Divider, List, Typography} from 'antd'
import {Ticket} from '../../../types/ticket'
import {CartTicket} from './CartTicket'
import {useResult} from '../../../context/searchContext'
import {TextSize20} from '../../../GlobalStyle'

type OrderProps = {
  incartTickets: Ticket[]
}

const {Title} = Typography

export const Order: React.FC<OrderProps> = ({incartTickets}) => 
  const {passengers} = useResult()

  const totalPrice = incartTickets.reduce((acc, curr) => {
    const t: Ticket = {
      ...acc,
      price: acc.price + curr.price
    }
    return t
  })

  return (
    <OrderWrapper>
      <Title level={3}>Order Summary</Title>
      <List
        dataSource={incartTickets}
        renderItem={item => {
          return <CartTicket
            key={item.id}
            price={item.price}
            ticketClass={item.ticketClass}
            destination={item.destination!}
            arrivalTime={item.arrivalTime!}
            departureTime={item.departureTime}
          />
        }}
      />
      <div className="order-summary">
        <Divider/>
        <TextSize20>Total Passengers: {passengers}</TextSize20>
        <Title level={3}>Order total: {totalPrice.price}$</Title>
      </div>
    </OrderWrapper>
  )
}

const OrderWrapper = styled.div`
  position: relative;
  flex: 1 1 20rem;
  height: fit-content;
  padding: 20px 20px 170px;
  border-radius: 8px;
  background-color: white;
  .order-summary{
    padding: 0 25px 30px; 
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;  
  }
`
