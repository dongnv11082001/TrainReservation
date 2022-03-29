import {Typography} from 'antd'
import moment from 'moment'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {Ticket} from '../../../types/ticket'
import {StyledText} from './HomeServiceCard'
import {useResult} from '../../../context/searchContext'
import {useLoading} from '../../../context/loadingContext'
import axios from 'axios'

const {Text} = Typography

export const HomeTicket: React.FC<Ticket> = ({
  id,
  destination,
  departure,
  departureTime,
  arrivalTime,
  airline,
  price,
  ticketClass,
}) => {
  const navigate = useNavigate()
  const {setResultTickets} = useResult()
  const {setLoading} = useLoading()

  const handleClick = async () => {
    setLoading(true)
    // const response = await axios.post<Ticket[]>('/queryTicket',{findingTicket})
    const response = await axios.get<Ticket[]>(
      'https://622b018b14ccb950d22be17d.mockapi.io/tickets'
    )
    setResultTickets(response.data)
    setLoading(false)
    navigate('/result')
  }

  return (
    <Box onClick={handleClick}>
      <TitleWithBackground>{destination}</TitleWithBackground>
      <TicketContainer>
        <StyledText italic>Departure: {moment(departureTime).format('h:mm')}</StyledText>
        <StyledText italic>Arrival: {moment(arrivalTime).format('h:mm')}</StyledText>
        <StyledText italic>Date: {moment(departureTime).format('DD-MM-YYYY')}</StyledText>
        <StyledText italic>Price: ${price}</StyledText>
      </TicketContainer>
    </Box>
  )
}

const Box = styled.div`
  margin: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
  font-size: 18px;
  min-height: 100px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  border-radius: 0.7rem;
  overflow: hidden;
  cursor: pointer;
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
