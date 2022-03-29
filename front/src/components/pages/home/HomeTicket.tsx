import {Typography} from 'antd'
import moment from 'moment'
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Ticket} from '../../../types/ticket'
import {StyledText} from './HomeServiceCard'

const {Text} = Typography

export const HomeTicket: React.FC<Ticket> = ({
  destination,
  departureTime,
  arrivalTime,
  price,
}) => (
  <StyledLink to={'/checkout'}>
    <TitleWithBackground>{destination}</TitleWithBackground>
    <TicketContainer>
      <StyledText italic>Departure: {moment(departureTime).format('h:mm')}</StyledText>
      <StyledText italic>Arrival: {moment(arrivalTime).format('h:mm')}</StyledText>
      <StyledText italic>Date: {moment(departureTime).format('DD-MM-YYYY')}</StyledText>
      <StyledText italic>Price: ${price}</StyledText>
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
const TicketContainer = styled.div`
  padding: 20px;
`
const TitleWithBackground = styled(Text)`
  background: #847c71;
  font-size: 20px !important;
  color: white !important;
  padding: 10px 12px;
  display:block;
`
