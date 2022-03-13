import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  ReactElement,
} from 'react'

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
  const [loading, setLoading] = useState(true)
  const value = {loading, setLoading}

  // if (!loading) return <>Loading...</>

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  )
}

