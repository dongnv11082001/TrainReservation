export interface Offer {
  id?: number
  isRoundTrip?: boolean
  status: 'pending' | 'paid' | 'cancelled'
  createdAt?: Date
  deleteAt?: Date
  passengers?: number
}

// ForeignKey:
//   ticketID

