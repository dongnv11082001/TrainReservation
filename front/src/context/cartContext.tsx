import React, {createContext, useContext, useState, ReactElement} from 'react'
import {Ticket} from '../types/ticket'

interface CartContextType {
  inCartTickets: Ticket[]
  setInCartTickets: (tickets: Ticket[]) => void | React.Dispatch<Ticket[]>
}

const CartTicketsContext = createContext<CartContextType>({
  inCartTickets: [],
  setInCartTickets: () => console.log('')
})

function useCartTickets(): CartContextType {
  return useContext(CartTicketsContext)
}

const CartTicketsProvider: React.FC = ({children}): ReactElement => {
  const [inCartTickets, setInCartTickets] = useState<Ticket[]>([])
  const value = {inCartTickets, setInCartTickets}
  return (
    <CartTicketsContext.Provider value={value}>
      {children}
    </CartTicketsContext.Provider>
  )
}
export {useCartTickets, CartTicketsProvider}