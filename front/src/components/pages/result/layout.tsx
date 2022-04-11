import React, {useState} from 'react'
import styled from 'styled-components'
import {FlexBox} from '../../modules/AdminLayout'
import {SearchPanel} from '../../modules/SearchPanel'
import {Ticket} from '../../../types/ticket'
import {TicketList} from './TicketList'
import {ConfigCenter} from './ConfigCenter'
import {UserLayout} from '../../modules/UserLayout'
import {useFilter, filterParams} from '../../../hooks/useFilter'

type ResultPageProps = {
  results: Ticket[]
}

const Layout: React.FC<ResultPageProps> = ({results}) => {
  const [filteredResults, setFilteredResults] = useState<Ticket[]>(results)

  const handleFilter = (props: Omit<filterParams, 'tickets'>) => {
    const filter = useFilter({tickets: results, ...props})
    setFilteredResults(filter)
  }

  return <UserLayout>
    <StickyContainer>
      <SearchPanel/>
    </StickyContainer>
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