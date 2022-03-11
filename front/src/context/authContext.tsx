import React, {useState, useContext, createContext, ReactElement, Dispatch} from 'react'
import {Guest} from '../types/guest'
import {Admin} from '../types/admin'

interface AuthContextType {
    user: null | Guest;
    setUser: (user: Guest | null) => void | Dispatch<Guest>;
    admin: null | Admin;
    setAdmin: (admin: Admin | null) => void | Dispatch<Admin>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: (user) => {
    console.log(user)
  },
  admin: null,
  setAdmin: (admin) => {
    console.log(admin)
  },
})

export function useAuth(): AuthContextType {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({children}): ReactElement => {
  const [user, setUser] = useState<null | Guest>(null)
  const [admin, setAdmin] = useState<null | Admin>(null)
  const value = {user, setUser, admin, setAdmin}
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  )
}
