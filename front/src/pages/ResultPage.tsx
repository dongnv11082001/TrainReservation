import React, {useEffect} from 'react'
import ResultLayout from '../components/pages/result/layout'
import {useResult} from '../context/searchContext'
import {LoadingOverlay} from '../components/elements/LoadingOverlay'
import {useLoading} from '../context/loadingContext'
import {useCartTickets} from '../context/cartContext'
import {useNavigate} from 'react-router-dom'

const ResultPage: React.FC = () => {
  const navigate = useNavigate()
  const {loading, setLoading} = useLoading()
  const {resultTickets} = useResult()
  const {clearCart} = useCartTickets()

  useEffect(() => {
    clearCart()
    if (resultTickets) setLoading(false)
    if (loading && !resultTickets) navigate('/')
  }, [])

  if (loading && !resultTickets) return <LoadingOverlay/>

  return (
    <>
      {!loading && resultTickets && <ResultLayout results={resultTickets}/>}
    </>
  )
}
export default ResultPage