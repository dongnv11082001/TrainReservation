import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ResultLayout from '../components/pages/result/layout'
import {Ticket} from '../types/ticket'
import {useLoading} from '../context/loadingContext'

const ResultPage: React.FC = () => {
  const [results, setResults] = useState<Ticket[]>([])
  const {setLoading} = useLoading()

  const fetchTicketResults = async () => {
    const response = await axios.get<Ticket[]>('https://622b018b14ccb950d22be17d.mockapi.io/tickets')
    const data = await response.data
    setLoading(false)
    setResults(data)
  }

  useEffect(() => {
    fetchTicketResults()
  }, [])

  return (
    <ResultLayout results={results}/>
  )
}
export default ResultPage