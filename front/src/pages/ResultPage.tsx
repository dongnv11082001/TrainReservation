import React, {useEffect} from 'react'
import ResultLayout from '../components/pages/result/layout'
import {useResult} from '../context/searchContext'
import {LoadingOverlay} from '../components/elements/LoadingOverlay'
import {useLoading} from '../context/loadingContext'

const ResultPage: React.FC = () => {
  const {loading, setLoading} = useLoading()
  const {resultTickets} = useResult()

  useEffect(() => {
    if (resultTickets) setLoading(false)
  }, [])

  if (loading) return <LoadingOverlay/>

  return (
    <>
      {!loading && resultTickets && <ResultLayout results={resultTickets}/>}
    </>
  )
}
export default ResultPage