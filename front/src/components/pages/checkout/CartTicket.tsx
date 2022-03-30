import React from 'react'

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
      <div>Arrival time: {arrivalTime}</div>
      <div>Departure time: {departureTime}</div>
      <div>Destination: {destination}</div>
      <div>Class: {ticketClass}</div>
      <div>Price: {price}$</div>
    </>
  )
}