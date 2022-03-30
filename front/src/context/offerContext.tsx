import React, {createContext, useContext, useState, ReactElement} from 'react'
import {Offer} from '../types/offer'

type OfferContextProps = {
  userOffer: null | Offer
  setUserOffer: (offer: Offer | null) => void | React.Dispatch<Offer | null>
}

const OfferContext = createContext<OfferContextProps>({
  userOffer: null,
  setUserOffer: () => console.log('User Offer Context haven\'t initialized yet')
})

function useOffer(): OfferContextProps {
  return useContext(OfferContext)
}

const OfferProvider: React.FC = ({children}): ReactElement => {
  const [userOffer, setUserOffer] = useState<Offer | null>(null)
  const value = {userOffer, setUserOffer}

  return <OfferContext.Provider value={value}>{children}</OfferContext.Provider>
}

export {useOffer, OfferProvider}