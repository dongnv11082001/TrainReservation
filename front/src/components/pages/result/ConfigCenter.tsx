import React, {useState} from 'react'
import styled from 'styled-components'
import {TicketProps} from '../../../types/ticket'

interface FilterParams {
  airline?: string
  priceUpperBound: number
  priceBelowBound: number
  departureTime?: Date
  ticketClass: 'chair' | 'soft' | 'bed'
}

export const ConfigCenter: React.FC = () => {
  const [filter, setFilter] = useState<FilterParams>({
    airline: 'VN Railway',
    priceUpperBound: 8000000,
    priceBelowBound: 0,
    ticketClass: 'chair'
  })

  const filterHeader = () => {
    return
  }
  return <></>
}