import {Ticket} from './ticket'
import {Offer} from './offer'

export interface Guest {
  offers: Ticket[]
  purchasedHistories: Offer[]
  email?: string
  phoneNumber?: string
  firstName?: string
  lastName?: string
}
