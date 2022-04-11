import moment from 'moment'
import {Ticket} from '../types/ticket'

export type filterParams = {
  tickets: Ticket[]
  filterType?: number
  ticketClass?: 'soft' | 'hard' | 'bed'
  priceRange?: number[]
  timeRange?: Date[]
}

export enum FilterType {
  ASCENDING_PRICE = 0,
  DESCENDING_PRICE = 1,
  LEAST_RECENT_FLIGHT = 2
}

export const useFilter = ({tickets, filterType, ticketClass, priceRange, timeRange}: filterParams) => {
  const showAscendingPrice = () => tickets.sort((prev, cur) => +prev.price - +cur.price)
  const showMostRecentFlight = () => tickets.sort((prev, cur) => +cur.departureTime - +prev.departureTime!)

  let filteredTickets = showMostRecentFlight()

  if (filterType === FilterType.LEAST_RECENT_FLIGHT) {
    filteredTickets = showMostRecentFlight().reverse()
  } else if (filterType === FilterType.ASCENDING_PRICE) {
    filteredTickets = showAscendingPrice()
  } else if (filterType === FilterType.DESCENDING_PRICE) {
    filteredTickets = showAscendingPrice().reverse()
  }

  if (ticketClass) filteredTickets = filteredTickets.filter(ticket => ticket.ticketClass === ticketClass)
  if (priceRange) filteredTickets = filteredTickets.filter(ticket => ticket.price > priceRange[0] && ticket.price < priceRange[1])
  if (timeRange) {
    filteredTickets = filteredTickets.filter(ticket => {
      const ticketDepartureTime = moment(ticket.departureTime, 'HH:mm')
      const startTime = moment(timeRange[0], 'HH:mm')
      const endTime = moment(timeRange[1], 'HH:mm')
      return ticketDepartureTime.isBetween(startTime, endTime)
    })
  }
  console.log(filteredTickets)

  return filteredTickets
}
