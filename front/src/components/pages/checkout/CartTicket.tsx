import React from 'react'
import moment from 'moment'
import {TextSize20} from '../../../GlobalStyle'
import {SwapRightOutlined} from '@ant-design/icons'
import styled from 'styled-components'

type Props = {
  arrivalTime: Date
  departureTime: Date
  destination: string
  price: number
  ticketClass?: string
}

export const CartTicket: React.FC<Props> = ({
  arrivalTime,
  departureTime,
  destination,
  price,
  ticketClass
}) => {
  const timeFormat = 'hh:mm'
  const dateFormat = 'DD/MM/YYYY'

  return (
    <TicketWrapper>
      <div>
        <TextSize20>{moment(departureTime).format(timeFormat)}
          <SwapRightOutlined/> {moment(arrivalTime).format(timeFormat)}
        </TextSize20>
        <div>{moment(departureTime).format(dateFormat)}</div>
        <div>{destination}</div>
        <ClassAndPriceWrapper>
          <div>
            <TextSize20>Train Class: {ticketClass?.toUpperCase()}</TextSize20>
          </div>
          <TextSize20>{price}$</TextSize20>
        </ClassAndPriceWrapper>
      </div>
    </TicketWrapper>
  )
}

const TicketWrapper = styled.div`
  background: white;
  border-radius: .6rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: outline 0.2s ease;
  padding: 20px !important;
  margin: 12px 0;
  
  &:hover{
    outline: 1px solid #55b7f3;
    transition: outline 0.2s ease;
  }
`

const ClassAndPriceWrapper = styled.div`
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  margin: 8px 0;
`

