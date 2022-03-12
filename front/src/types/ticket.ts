export interface TicketProps {
  id: string
  destination: string
  departure: string
  departureTime: Date
  arrivalTime: Date
  price: number
  ticketClass?: 'soft' | 'bed' | 'chair'
  airline?: string
}