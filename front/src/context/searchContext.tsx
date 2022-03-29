import React, {createContext, useContext, useState} from 'react'
import {Ticket} from '../types/ticket'

type SearchContextProps = {
  resultTickets: null | Ticket[]
  setResultTickets: (tickets: Ticket[]) => void | React.Dispatch<Ticket[] | null>
}

const SearchContext = createContext<SearchContextProps>({
  resultTickets: null,
  setResultTickets: () => console.log('')
})

function useResult(): SearchContextProps {
  return useContext(SearchContext)
}

const SearchProvider: React.FC = ({children}): React.ReactElement => {
  const [resultTickets, setResultTickets] = useState<Ticket[] | null>(null)
  const value = {resultTickets, setResultTickets}
  return <SearchContext.Provider value={value}>
    {children}
  </SearchContext.Provider>
}

export {useResult, SearchProvider}