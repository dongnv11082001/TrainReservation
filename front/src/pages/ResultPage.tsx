import React from 'react'
import ResultLayout from '../components/pages/result/layout'
import {useResult} from '../context/searchContext'
import {LoadingOverlay} from '../components/elements/LoadingOverlay'
import {useLoading} from '../context/loadingContext'

const ResultPage: React.FC = () => {
  const {loading} = useLoading()
  const {resultTickets} = useResult()

  if (loading) return <LoadingOverlay/>

  return (
    <>
      {!loading && resultTickets && <ResultLayout results={resultTickets}/>}
    </>
  )
}
export default ResultPage