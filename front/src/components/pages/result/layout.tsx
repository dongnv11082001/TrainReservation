import React from 'react'
import styled from 'styled-components'
import {CommonLayout, FlexBox} from '../../modules/ComonLayout'
import {SearchPanel} from '../../modules/SearchPanel'
import {Ticket} from '../../../types/ticket'
import {TicketList} from './TicketList'
import {ConfigCenter} from './ConfigCenter'

type ResultPageProps = {
  results: Ticket[]
}

const Layout: React.FC<ResultPageProps> = ({results}) => {
  return <CommonLayout>
    <StickyContainer>
      <SearchPanel/>
    </StickyContainer>
    <ResultBody>
      <ConfigCenter/>
      <TicketList tickets={results}/>
    </ResultBody>
  </CommonLayout>
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