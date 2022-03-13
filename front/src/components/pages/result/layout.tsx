import React from 'react'
import styled from 'styled-components'
import {CommonLayout} from '../../modules/ComonLayout'
import {SearchPanel} from '../../modules/SearchPanel'
import {TicketProps} from '../../../types/ticket'
import {TicketList} from './TicketList'

type ResultPageProps = {
  results: TicketProps[]
}

const Layout: React.FC<ResultPageProps> = ({results}) => {
  return <CommonLayout>
    <StickyContainer>
      <SearchPanel/>
      <div style={{width: 800}}>
        <TicketList tickets={results}/>
      </div>
    </StickyContainer>
  </CommonLayout>
}
export default Layout

const StickyContainer = styled.div`
  position: sticky;
  top:0;
`