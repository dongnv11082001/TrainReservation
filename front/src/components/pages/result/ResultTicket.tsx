import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {Ticket} from '../../../types/ticket'
import {useResult} from '../../../context/searchContext'
import {useCartTickets} from '../../../context/cartContext'
import {SwapRightOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import {TextSize20} from '../../../GlobalStyle'
import {useLoading} from '../../../context/loadingContext'
import moment from 'moment'

type ResultTicketProps = {
  ticket: Ticket
}

export const ResultTicket: React.FC<ResultTicketProps> = ({ticket}) => {
  const navigate = useNavigate()
  const {contextRoundTrip} = useResult()
  const {inCartTickets, setInCartTickets} = useCartTickets()
  const {setLoading} = useLoading()

  const handleSelect = () => {
    setLoading(true)
    if (contextRoundTrip && inCartTickets.length >= 0 && inCartTickets.length < 2) {
      setInCartTickets([...inCartTickets, ticket])
      if (inCartTickets.length >= 1) {
        navigate('/checkout')
      }
    } else {
      setInCartTickets([ticket])
      if (!contextRoundTrip) {
        navigate('/checkout')
      }
    }
  }

  return (
    <TicketWrapper>
      <div>
        <TextSize20>{moment(ticket.departureTime).format('hh:mm')} <SwapRightOutlined /> {moment(ticket.arrivalTime).format('hh:mm')}</TextSize20>
        <div>{ticket.destination}</div>
        <ClassAndPriceWrapper>
          <div>
            <TextSize20>{ticket.ticketClass?.toUpperCase()}</TextSize20>
          </div>
          <TextSize20>{ticket.price}$</TextSize20>
        </ClassAndPriceWrapper>
        <ButtonWrapper>
          <Link to={'/'}>More ticket information</Link>
          <Button onClick={handleSelect}>Buy</Button>
        </ButtonWrapper>
      </div>
    </TicketWrapper>
  )
}

const TicketWrapper = styled.div`
  background: white;
  border-radius: .6rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: outline 0.2s ease;
  padding: 20px !important;
  margin: 12px 0;
  
  :hover{
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

const ButtonWrapper = styled.div`
  display: flex; 
  justify-content: space-between;
  border-top: 1px solid #ddd; 
  align-items: center; 
  padding-top: 16px;

`

const Button = styled.button`
  cursor: pointer;
  padding: 4px 16px; 
  background-color: #325a50; 
  color: #fff; 
  border: 0; 
  border-radius: 4px;
  
  &:hover {
    opacity: 0.8;
  }
`