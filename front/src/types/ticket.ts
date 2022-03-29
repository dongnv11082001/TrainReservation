export interface Ticket {
  id?: number
  destination: string
  departure: string
  departureTime: Date
  arrivalTime: Date
  price: number
  ticketClass: 'soft' | 'hard' | 'bed'
  airline?: string
  status?: 'available' | 'pending' | 'sold'
}