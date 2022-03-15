import React from 'react'
import styled from 'styled-components'
import {Typography, List, Badge} from 'antd'
import {TicketProps} from '../../../types/ticket'
import {useLoading} from '../../../context/loadingContext'
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
  const {loading} = useLoading()

  return (
    <TicketListWrapper>
      <Filter>
        {
          filterItems.map((item, index) => <Text key={index}>{item.title}</Text>)
        }
      </Filter>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={tickets}
        renderItem={ticket => (
          <Ribbon text={ticket.ticketClass?.toUpperCase()} color="#fad739">
            <ResultTicket ticket={ticket} loading={loading}/>
          </Ribbon>
        )}
      />
    </TicketListWrapper>
  )
}
const TicketListWrapper = styled.div``
const Filter = styled.div`
  display: flex;
  align-items:center;
  gap: 20px;
  border: 1px solid #d9d9d9;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  span{
    padding: 16px 20px 10px;
    color: #466a81;
    font-size: 1rem;
    font-weight: bold;
  }
`
const Ribbon = styled(Badge.Ribbon)`
  .ant-ribbon-text{
    color:#e8762d !important;
    font-size: 1rem;
  }
`