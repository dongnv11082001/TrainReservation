import React, {createContext, useContext, useState, ReactElement} from 'react'
import {Ticket} from '../types/ticket'
import axios from 'axios'

type SearchContextProps = {
  resultTickets: null | Ticket[]
  setResultTickets: (tickets: Ticket[]) => void | React.Dispatch<Ticket[] | null>
  contextRoundTrip: boolean
  setContextRoundTrip: (roundTrip: boolean) => void | React.Dispatch<boolean>
  passengers: number
  setPassengers: (passenger: number) => void | React.Dispatch<number>
  contextTicketClass: 'bed' | 'soft' | 'hard' | null,
  setContextTicketClass: (ticketClass: 'bed' | 'soft' | 'hard' | null) => void | React.Dispatch<null | 'bed' | 'soft' | 'hard'>
  searchTickets: (desiredTicket?: Ticket) => void
}

const SearchContext = createContext<SearchContextProps>({
  resultTickets: null,
  setResultTickets: () => console.log('Search Result Context haven\'t initialized'),
  contextRoundTrip: false,
  setContextRoundTrip: () => console.log('RoundTrip is not initialize'),
  passengers: 1,
  setPassengers: () => console.log('Passengers is not initialized'),
  contextTicketClass: 'hard',
  setContextTicketClass: () => console.log('contextTicketClass is not initialized'),
  searchTickets: () => console.log('Passengers is not initialized')
})

function useResult(): SearchContextProps {
  return useContext(SearchContext)
}

const SearchProvider: React.FC = ({children}): ReactElement => {
  const [resultTickets, setResultTickets] = useState<Ticket[] | null>(null)
  const [contextRoundTrip, setContextRoundTrip] = useState<boolean>(false)
  const [passengers, setPassengers] = useState<number>(1)
  const [contextTicketClass, setContextTicketClass] = useState<'bed' | 'soft' | 'hard' | null>(null)

  const searchTickets = async (ticket?: Ticket) => {
    // const response = await axios.post<Ticket[]>('/queryTicket',{findingTicket})
    const response = await axios.get<Ticket[]>(
      'https://622b018b14ccb950d22be17d.mockapi.io/tickets'
    )
    setResultTickets(response.data)
  }

  const value = {
    resultTickets,
    setResultTickets,
    contextRoundTrip,
    setContextRoundTrip,
    passengers,
    setPassengers,
    searchTickets,
    contextTicketClass,
    setContextTicketClass
  }

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export {useResult, SearchProvider}