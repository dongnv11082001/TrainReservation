import {TicketProps} from '../types/ticket'

export function useFilter(tickets: TicketProps[]): any {
  const showAscendingPrice = () => tickets.sort((prev, cur) => +prev.price - +cur.price)
  const showMostRecentFlight = () => tickets.sort((prev, cur) => +prev.departureTime - +cur.arrivalTime)
  return {
    showAscendingPrice,
    showMostRecentFlight
  }
}
