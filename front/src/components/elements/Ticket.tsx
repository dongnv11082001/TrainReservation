import { Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ITicket } from '../pages/home/TicketList'

type TicketsProps = {
  ticket: ITicket
}

export const Ticket: React.FC<TicketsProps> = ({ ticket }) => {
  const { Text, Title } = Typography
  return (
    <Link to={'/tickets/id'}>
      <TicketContainer>
        <Text>{ticket.label}</Text>
        <Title style={{ fontSize: '20px' }}>{ticket.trip}</Title>
        <Text italic>Departure: {ticket.date.substring(0, 10)}</Text>
        <Title
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            fontSize: '20px',
          }}
        >
          {ticket.price}đ
        </Title>
      </TicketContainer>
    </Link>
  )
}

const TicketContainer = styled.div`
  margin: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
  width: 360px;
  padding: 12px;
  font-size: 18px;
`
