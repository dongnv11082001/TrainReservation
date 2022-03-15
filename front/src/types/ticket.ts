export interface Ticket {
  id: string
  destination: string
  departure: string
  departureTime: Date
  arrivalTime: Date
  price: number
  ticketClass: 'Ghế mềm' | 'Ghế cứng' | 'Giường nằm'
  airline?: string
  status?: 'available' | 'pending' | 'sold'
}