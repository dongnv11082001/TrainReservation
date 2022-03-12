import React, {createContext, useContext, useState, ReactElement} from 'react'
import {TicketProps} from '../types/ticket'

interface CartContextType {
  inCartTickets: null | TicketProps[]
  setInCartTickets: (tickets: TicketProps[]) => void | React.Dispatch<TicketProps[] | null>
}

const CartTicketsContext = createContext<CartContextType>({
  inCartTickets: null,
  setInCartTickets: () => console.log('')
})

function useCartTickets(): CartContextType {
  return useContext(CartTicketsContext)
}

const CartTicketsProvider: React.FC = ({children}): ReactElement => {
  const [inCartTickets, setInCartTickets] = useState<null | TicketProps[]>(null)
  const value = {inCartTickets, setInCartTickets}
  return (
    <CartTicketsContext.Provider value={value}>
      {children}
    </CartTicketsContext.Provider>
  )
}
export {useCartTickets, CartTicketsProvider}