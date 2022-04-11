import {Offer} from './offer'

export interface User {
  id?: number
  purchasedHistories?: Offer[]
  email?: string
  phoneNumber?: string
  firstName?: string
  lastName?: string
  username: string
  password: string
  avatarURL?: string
  gender: 'male' | 'female'
  createdAt: Date
  updateAt: Date
  deleteAt: Date
}

