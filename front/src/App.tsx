import React from 'react'
import 'antd/dist/antd.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import { GlobalStyle } from './GlobalStyle'
import { CheckoutPage } from './pages/CheckoutPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
      <GlobalStyle />
    </>
  )
}

export default App
