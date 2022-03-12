import {TicketProps} from './ticket'
import {Offer} from './offer'

export interface Guest {
  offers: TicketProps[]
  purchasedHistories: Offer[]
  email: string
  firstName?: string
  lastName?: string
}
