import axios from 'axios'
import React, {useEffect} from 'react'
import ResultLayout from '../components/pages/result/layout'
import {Ticket} from '../types/ticket'
import {useLoading} from '../context/loadingContext'
import {useResult} from '../context/searchContext'

const ResultPage: React.FC = () => {
  const {resultTickets, setResultTickets} = useResult()
  const {loading, setLoading} = useLoading()

  const fetchTicketResults = async () => {
    const response = await axios.get<Ticket[]>('https://622b018b14ccb950d22be17d.mockapi.io/tickets')
    const data = await response.data
    setLoading(false)
    setResultTickets(data)
  }

  useEffect(() => {
    setLoading(true)
    fetchTicketResults()
  }, [])

  if (loading) return <>Loading...</>

  return (
    <>
      {!loading && resultTickets && <ResultLayout results={resultTickets}/>}
    </>
  )
}
export default ResultPage