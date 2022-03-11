import React from 'react'
import styled from 'styled-components'
import HomeLayout from './components/pages/home/layout'
import 'antd/dist/antd.css'

function App() {
  return (
    <AppContainer>
      <HomeLayout/>
    </AppContainer>
  )
}

export default App
const AppContainer = styled.div`

`