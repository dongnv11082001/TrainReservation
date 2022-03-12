import React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'
import {TicketProps} from '../../../types/ticket'
import {ResultTicket} from './ResultTicket'

const filterItems = [
  {
    title: 'Đề xuất',
    query: '?q=suggestion'
  },
  {
    title: 'Giá tăng dần',
    query: '?q=ascending'
  },
  {
    title: 'Thời gian cất cánh',
    query: '?q=departureTime'
  }]

type TicketListProps = {
  tickets: TicketProps[]
}

const {Text} = Typography

export const TicketList: React.FC<TicketListProps> = ({tickets}) => {
  return (
    <TicketListWrapper>
      <Filter>
        {
          filterItems.map((item, index) => <Text key={index}>{item.title}</Text>)
        }
      </Filter>
      <Results>
        {tickets?.map((ticket) => (
          <ResultTicket
            key={ticket.id}
            id={ticket.id}
            destination={ticket.destination}
            departure={ticket.departure}
            departureTime={ticket.departureTime}
            arrivalTime={ticket.arrivalTime}
            price={ticket.price}
          />
        ))}
      </Results>
    </TicketListWrapper>
  )
}
const TicketListWrapper = styled.div``
const Results = styled.div``
const Filter = styled.div``