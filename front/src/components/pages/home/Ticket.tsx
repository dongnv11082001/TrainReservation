import {Typography} from 'antd'
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {TicketProps} from '../../../types/ticket'

const {Text, Title} = Typography

export const Ticket: React.FC<TicketProps> = ({id, label, price, trip, date}) => (
  <Link to={`/tickets/${id}`}>
    <TicketContainer>
      <Text>{label}</Text>
      <Title style={{fontSize: '20px'}}>{trip}</Title>
      <Text italic>Departure: {date.substring(0, 10)}</Text>
      <StyledTitle>{price}đ</StyledTitle>
    </TicketContainer>
  </Link>
)


const TicketContainer = styled.div`
  margin: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
  padding: 12px;
  font-size: 18px;
  min-height: 200px;
`
const StyledTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
`