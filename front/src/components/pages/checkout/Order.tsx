import React from 'react'
import styled from 'styled-components'
import {List} from 'antd'
import {Ticket} from '../../../types/ticket'

type OrderProps = {
  incartTickets: Ticket[]
}

export const Order: React.FC<OrderProps> = ({incartTickets}) => {
  return (
    <OrderWrapper>
      <div>
        <Name>Order total </Name>
      </div>
      {/*<List*/}
      {/*  dataSource={incartTickets}*/}
      {/*  itemLayout='vertical'*/}
      {/*  renderItem={}*/}
      {/*/>*/}
      <Field>
        <span>Shipping</span>
        <span>FREE</span>
      </Field>
      <Field>
        <span>Order Total</span>
      </Field>
    </OrderWrapper>
  )
}

const OrderWrapper = styled.div`
  width: 440px;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
`

const Name = styled.h2`
  margin-bottom: 40px;
`

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f0f0f5;
  padding: 14px 0;
`