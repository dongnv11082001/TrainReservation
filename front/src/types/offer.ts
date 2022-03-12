export interface Offer {
  id: string
  willBack?: boolean
  status: 'pending' | 'paid' | 'cancelled'
  createdAt: Date
  deleteAt: Date
}