import React, {createContext, useContext, useState, ReactElement} from 'react'
import {Ticket} from '../types/ticket'

type SearchContextProps = {
  resultTickets: null | Ticket[]
  setResultTickets: (tickets: Ticket[]) => void | React.Dispatch<Ticket[] | null>
  contextRoundTrip: boolean
  setContextRoundTrip: (roundTrip: boolean) => void | React.Dispatch<boolean>
  passengers: number,
  setPassengers: (passenger: number) => void | React.Dispatch<number>
}

const SearchContext = createContext<SearchContextProps>({
  resultTickets: null,
  setResultTickets: () => console.log('Search Result Context haven\'t initialized'),
  contextRoundTrip: false,
  setContextRoundTrip: () => console.log('RoundTrip is not initialize'),
  passengers: 1,
  setPassengers: () => console.log('Passengers is not initialized')
})

function useResult(): SearchContextProps {
  return useContext(SearchContext)
}

const SearchProvider: React.FC = ({children}): ReactElement => {
  const [resultTickets, setResultTickets] = useState<Ticket[] | null>(null)
  const [contextRoundTrip, setContextRoundTrip] = useState<boolean>(false)
  const [passengers, setPassengers] = useState<number>(1)

  const value = {resultTickets, setResultTickets, contextRoundTrip, setContextRoundTrip, passengers, setPassengers}

  return <SearchContext.Provider value={value}>
    {children}
  </SearchContext.Provider>
}

export {useResult, SearchProvider}