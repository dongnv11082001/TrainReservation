export interface Offer {
  id?: number
  isRoundTrip?: boolean
  status?: 'pending' | 'paid' | 'cancelled'
  createdAt?: Date
  deleteAt?: Date
  passengers?: number
  user: UserSubmit,
  tickets?: string[]
}

export interface UserSubmit {
  id?: string
  userName?: string
  phoneNumber?: string
  gender?: 'male' | 'female'
  paymentMethod?: 'onCheckin' | 'online'
}
