import React, {ReactElement} from 'react'
import styled from 'styled-components'
import {Footer} from '../elements/Footer'
import {Header} from '../elements/Header'

export const UserLayout: React.FC = ({children}): ReactElement => {
  return (
    <Wrapper>
      <Header/>
      {children}
      <Footer/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background: #f0f2f5;
`