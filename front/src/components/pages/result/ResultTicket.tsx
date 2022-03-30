import React from 'react'
import styled from 'styled-components'
import {Avatar, Skeleton, Typography} from 'antd'
import {useNavigate} from 'react-router-dom'
import {Ticket} from '../../../types/ticket'
import {FlexBox} from '../../modules/ComonLayout'
import {useResult} from '../../../context/searchContext'
import {useCartTickets} from '../../../context/cartContext'

type ResultTicketProps = {
  ticket: Ticket
  loading: boolean
}

const {Text} = Typography

export const ResultTicket: React.FC<ResultTicketProps> = ({ticket, loading}) => {
  const navigate = useNavigate()
  const {contextRoundTrip} = useResult()
  const {inCartTickets, setInCartTickets} = useCartTickets()

  const handleSelect = () => {
    if (contextRoundTrip && inCartTickets.length >= 0 && inCartTickets.length < 2) {
      setInCartTickets([...inCartTickets, ticket])
      if (inCartTickets.length >= 1) navigate('/checkout')
    } else {
      setInCartTickets([ticket])
      if (!contextRoundTrip) navigate('/checkout')
    }
  }

  return <TicketWrapper>
    <Button onClick={handleSelect}>Choose</Button>
  </TicketWrapper>
}

const Box = styled(FlexBox)`
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  gap: 5px;
`
const TicketWrapper = styled.div`
  background: white;
  border-radius: .6rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: outline 0.2s ease;
  padding: 20px !important;
  
  :hover{
    outline: 1px solid #55b7f3;
    transition: outline 0.2s ease;
  }
`
const Button = styled(FlexBox)`
  cursor: pointer;
  background: #729c98;
  width:80px;
  padding: 7px 10px;
  border-radius: .6rem;
  color: #f7f6f4;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
`