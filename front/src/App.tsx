import React from 'react'
import styled from 'styled-components'
import HomeLayout from './components/pages/home/layout'
import 'antd/dist/antd.css'
import { Routes, Route } from 'react-router-dom'
import TicketsPage from './components/pages/TicketsPage'

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/tickets' element={<TicketsPage />} />
      </Routes>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div``
