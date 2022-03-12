export interface TicketProps {
  id: string
  destination: string
  departure: string
  departureTime: Date
  arrivalTime: Date
  price: string
  ticketClass?: 'soft' | 'bed' | 'chair'
  airline?: string
}