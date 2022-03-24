import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  ReactElement, useEffect,
} from 'react'
import {useLocation} from 'react-router-dom'

interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void | Dispatch<boolean>;
}

const LoadingContext = createContext<LoadingContextType>({
  loading: true,
  setLoading: (loading: boolean) => console.log(loading),
})

export function useLoading() {
  return useContext(LoadingContext)
}

export const LoadingProvider: React.FC = ({children}): ReactElement => {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const value = {loading, setLoading}
  
  useEffect(() => {
    setLoading(true)
  }, [location.pathname])

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  )
}

