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
import {LoginPage} from './pages/LoginPage'
import {SignUpPage} from './pages/SignUpPage'
import {OfferManagePage} from './pages/admin/OfferManagePage'
import {TicketManagePage} from './pages/admin/TicketManagePage'
import {UserManagePage} from './pages/admin/UserManagePage'
import {AdminHome} from './pages/admin/AdminHome'
import {SearchProvider} from './context/searchContext'

function App() {
  return (
    <LoadingProvider>
      <SearchProvider>
        <CartTicketsProvider>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/result" element={<ResultPage/>}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
            <Route path="/admin" element={<AdminHome/>}/>
            <Route path="/admin/offers" element={<OfferManagePage/>}/>
            <Route path="/admin/tickets" element={<TicketManagePage/>}/>
            <Route path="/admin/users" element={<UserManagePage/>}/>
            <Route path='/sign_in' element={<LoginPage/>}/>
            <Route path='/sign_up' element={<SignUpPage/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <GlobalStyle/>
        </CartTicketsProvider>
      </SearchProvider>
    </LoadingProvider>
  )
}

export default App
