import React from 'react'
import 'antd/dist/antd.css'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import TicketsPage from './components/pages/home/TicketList'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/tickets' element={<TicketsPage />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App