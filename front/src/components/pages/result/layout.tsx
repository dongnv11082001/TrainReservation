import React from 'react'
import styled from 'styled-components'
import {CommonLayout} from '../../modules/ComonLayout'
import {SearchPanel} from '../../modules/SearchPanel'
import {TicketProps} from '../../../types/ticket'

type ResultPageProps = {
  results: TicketProps[]
}

const Layout: React.FC<ResultPageProps> = ({results}) => {
  return <CommonLayout>
    <StickyContainer>
      <SearchPanel/>
    </StickyContainer>
  </CommonLayout>
}
export default Layout

const StickyContainer = styled.div`
  position: sticky;
  top:0;
`