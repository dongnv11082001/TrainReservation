import React, {useState} from 'react'
import styled from 'styled-components'
import {List} from 'antd'
import {FlexBox} from '../../modules/AdminLayout'
import {SearchPanel} from '../../modules/SearchPanel'
import {Ticket} from '../../../types/ticket'
import {TicketList} from './TicketList'
import {ConfigCenter} from './ConfigCenter'
import {UserLayout} from '../../modules/UserLayout'
import {useFilter, filterParams} from '../../../hooks/useFilter'
import {useCartTickets} from '../../../context/cartContext'
import {CartTicket} from '../../elements/CartTicket'

type ResultPageProps = {
  results: Ticket[]
}

const Layout: React.FC<ResultPageProps> = ({results}) => {
  const {inCartTickets} = useCartTickets()
  const [filteredResults, setFilteredResults] = useState<Ticket[]>(results)

  const handleFilter = (props: Omit<filterParams, 'tickets'>) => {
    const filter = useFilter({tickets: results, ...props})
    setFilteredResults(filter)
  }

  return <UserLayout>
    <StickyContainer>
      <SearchPanel/>
    </StickyContainer>
    {inCartTickets.length > 0 &&
        <Cart>
          <h2>Choosing Ticket</h2>
          <List
            dataSource={inCartTickets}
            renderItem={item => {
              return <CartTicket
                key={item.id}
                price={item.price}
                ticketClass={item.ticketClass}
                destination={item.destination}
                arrivalTime={item.arrivalTime}
                departureTime={item.departureTime}
              />
            }}
          />
        </Cart>}
    <ResultBody>
      <ConfigCenter filter={handleFilter}/>
      <TicketList tickets={filteredResults}/>
    </ResultBody>
  </UserLayout>
}
export default Layout

const StickyContainer = styled(FlexBox)`
  width: 100%;
  padding: 2rem 4%;
`
const ResultBody = styled(FlexBox)`
  align-items: inherit;
  gap: 2rem;
  margin-bottom: 4rem;
`
const Cart = styled(FlexBox)`
  flex-direction: column;
  margin-bottom: 2rem;
  .ant-list.ant-list-split{
    max-width:700px;
  }
`