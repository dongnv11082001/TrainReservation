import React from 'react'
import moment from 'moment'

type Props = {
    arrivalTime: Date
    departureTime: Date
    destination: string
    price: number
    ticketClass?: string
}

export const CartTicket: React.FC<Props> = ({
  arrivalTime,
  departureTime,
  destination,
  price,
  ticketClass
}) => {

  return (
    <>
      <div>Departure time: {moment(departureTime).format('hh:mm')} - {moment(departureTime).format('DD/MM/YYYY')}</div>
      <div>Arrival time: {moment(arrivalTime).format('hh:mm')} - {moment(arrivalTime).format('DD/MM/YYYY')}</div>
      <div>Destination: {destination}</div>
      <div>Class: {ticketClass}</div>
      <div>Price: {price}$</div>
    </>
  )
}