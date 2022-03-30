import React, {createContext, useContext, useState, ReactElement} from 'react'
import {Ticket} from '../types/ticket'

interface CartContextType {
  inCartTickets: Ticket[]
  setInCartTickets: (tickets: Ticket[]) => void | React.Dispatch<Ticket[]>
  clearCart: () => void
  removeCartItem: (id: number) => void
}

const CartTicketsContext = createContext<CartContextType>({
  inCartTickets: [],
  setInCartTickets: () => console.log('Cart Conext have not initialized'),
  clearCart: () => console.log('clearCart have not initialized'),
  removeCartItem: () => console.log('removeCartItem have not initialized')
})

function useCartTickets(): CartContextType {
  return useContext(CartTicketsContext)
}

const CartTicketsProvider: React.FC = ({children}): ReactElement => {
  const [inCartTickets, setInCartTickets] = useState<Ticket[]>([])
  const clearCart = () => setInCartTickets([])
  const removeCartItem = (id: number) => setInCartTickets((prev) => prev.filter(item => item.id !== id))

  const value = {inCartTickets, setInCartTickets, clearCart, removeCartItem}

  return (
    <CartTicketsContext.Provider value={value}>
      {children}
    </CartTicketsContext.Provider>
  )
}
export {useCartTickets, CartTicketsProvider}