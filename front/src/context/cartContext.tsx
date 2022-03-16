import React, {createContext, useContext, useState, ReactElement} from 'react'
import {Ticket} from '../types/ticket'

interface CartContextType {
  inCartTickets: null | Ticket[]
  setInCartTickets: (tickets: Ticket[]) => void | React.Dispatch<Ticket[] | null>
}

const CartTicketsContext = createContext<CartContextType>({
  inCartTickets: null,
  setInCartTickets: () => console.log('')
})

function useCartTickets(): CartContextType {
  return useContext(CartTicketsContext)
}

const CartTicketsProvider: React.FC = ({children}): ReactElement => {
  const [inCartTickets, setInCartTickets] = useState<null | Ticket[]>(null)
  const value = {inCartTickets, setInCartTickets}
  return (
    <CartTicketsContext.Provider value={value}>
      {children}
    </CartTicketsContext.Provider>
  )
}
export {useCartTickets, CartTicketsProvider}