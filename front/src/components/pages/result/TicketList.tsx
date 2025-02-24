import React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'
import {Ticket} from '../../../types/ticket'
import {ResultTicket} from './ResultTicket'

const filterItems = [
  {
    title: 'Suggestion',
    query: '?q=suggestion'
  },
  {
    title: 'Ascending',
    query: '?q=ascending'
  },
  {
    title: 'Take off',
    query: '?q=departureTime'
  }]

type TicketListProps = {
  tickets: Ticket[]
}

const {Text} = Typography

export const TicketList: React.FC<TicketListProps> = ({tickets}) => {

  return (
    <div>
      <Filter>
        {
          filterItems.map((item, index) => <Text key={index}>{item.title}</Text>)
        }
      </Filter>
      <ResultList>
        {tickets.map((ticket) =>
          <ResultTicket key={ticket.id} ticket={ticket}/>
        )}
      </ResultList>
    </div>
  )
}
const Filter = styled.div`
  display: flex;
  align-items:center;
  gap: 20px;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  span{
    padding: 16px 20px 10px;
    color: #466a81;
    font-size: 1rem;
    font-weight: bold;
  }
`
const ResultList = styled.div`
  width: 600px;
`