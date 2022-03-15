import {Typography} from 'antd'
import moment from 'moment'
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Ticket} from '../../../types/ticket'
import {FlexBox} from '../../modules/ComonLayout'

const {Text, Title} = Typography

export const HomeTicket: React.FC<Ticket> = ({
  id,
  destination,
  departure,
  departureTime,
  arrivalTime,
  airline,
  price,
  ticketClass,
}) => (
  <StyledLink to={`/tickets/${id}`}>
    <TitleWithBackground>{destination}</TitleWithBackground>
    <TicketContainer>
      <Text>Departure time: {moment(departureTime).format('h:mm')}</Text>
      <Text>Arrival time: {moment(arrivalTime).format('h:mm')}</Text>
      <Text italic>Date: {moment(departureTime).format('DD-MM-YYYY')}</Text>
      <Text>{price}đ</Text>
    </TicketContainer>
  </StyledLink>
)

const StyledLink = styled(Link)`
  margin: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
  font-size: 18px;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  border-radius: 0.7rem;
  overflow: hidden;
`

const TicketContainer = styled(FlexBox)`
  padding: 20px;
  flex-direction: column;
`
const TitleWithBackground = styled(Title)`
  background: #0056a7;
  font-size: 20px !important;
  color: white !important;
  padding: 10px 12px;
`
