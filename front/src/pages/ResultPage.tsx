import React, {useEffect, useState} from 'react'
import ResultLayout from '../components/pages/result/layout'
import {useResult} from '../context/searchContext'
import {LoadingOverlay} from '../components/elements/LoadingOverlay'
import {useLoading} from '../context/loadingContext'
import NotFound from './NotFound'
import {useNavigate} from 'react-router-dom'

const ResultPage: React.FC = () => {
  const navigate = useNavigate()
  const {loading} = useLoading()
  const {resultTickets} = useResult()
  const [isTimeOut, setIsTimeOut] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsTimeOut(true)
    }, 10000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 14000)
  }, [isTimeOut])

  if (isTimeOut) return <NotFound/>
  if (loading) return <LoadingOverlay/>

  return (
    <>
      {!loading && resultTickets && <ResultLayout results={resultTickets}/>}
    </>
  )
}
export default ResultPage