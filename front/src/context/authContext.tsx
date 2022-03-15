import React, {useState, useContext, createContext, ReactElement, Dispatch} from 'react'
import {Guest} from '../types/guest'
import {Admin} from '../types/admin'
import {User} from '../types/user'

interface AuthContextType {
  guest: null | Guest;
  setGuest: (guest: Guest | null) => void | Dispatch<Guest>;
  user: null | User;
  setUser: (user: User | null) => void | Dispatch<Guest>;
  admin: null | Admin;
  setAdmin: (admin: Admin | null) => void | Dispatch<Admin>;
}

const AuthContext = createContext<AuthContextType>({
  guest: null,
  setGuest: (guest) => console.log(guest),
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
  const [guest, setGuest] = useState<null | Guest>(null)
  const [user, setUser] = useState<null | User>(null)
  const [admin, setAdmin] = useState<null | Admin>(null)
  const value = {guest, setGuest, user, setUser, admin, setAdmin}
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  )
}
