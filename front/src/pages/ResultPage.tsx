import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ResultLayout from '../components/pages/result/layout'
import {Ticket} from '../types/ticket'
import {useLoading} from '../context/loadingContext'

const ResultPage: React.FC = () => {
  const [results, setResults] = useState<Ticket[]>([])
  const {setLoading} = useLoading()

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    const fetchTicketResults = async () => {
      try {
        const response = await axios.get<Ticket[]>('https://622b018b14ccb950d22be17d.mockapi.io/tickets', { signal: controller.signal })
        const data = response.data
        setLoading(false)
        setResults(data)
      } catch (err: unknown) {
        setLoading(true)
      }
    }

    fetchTicketResults()

    return () => {
      setLoading(false)
      controller.abort()
    }
  }, [])

  return (
    <ResultLayout results={results}/>
  )
}
export default ResultPage