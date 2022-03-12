import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ResultLayout from '../components/pages/result/layout'
import {TicketProps} from '../types/ticket'
import {LoadingProvider, useLoading} from '../context/loadingContext'

export const ResultPage: React.FC = () => {
  const [results, setResults] = useState<TicketProps[]>([])
  const {setLoading} = useLoading()

  const fetchTicketResults = async () => {
    const response = await axios.get<TicketProps[]>('https://622b018b14ccb950d22be17d.mockapi.io/tickets')
    const data = await response.data
    setLoading(false)
    setResults(data)
  }

  useEffect(() => {
    fetchTicketResults()
  }, [])

  return (
    <LoadingProvider>
      <ResultLayout results={results}/>
    </LoadingProvider>
  )
}