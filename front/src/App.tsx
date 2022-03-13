import React from 'react'
import 'antd/dist/antd.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import ResultPage from './pages/ResultPage'
import {GlobalStyle} from './GlobalStyle'
import {CartTicketsProvider} from './context/cartContext'
import {CheckoutPage} from './pages/CheckoutPage'
import {LoadingProvider} from './context/loadingContext'

function App() {
  return (
    <LoadingProvider>
      <CartTicketsProvider>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/result" element={<ResultPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <GlobalStyle/>
      </CartTicketsProvider>
    </LoadingProvider>
  )
}

export default App
