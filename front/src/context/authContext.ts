import React, { ReactNode, useState, useContext, createContext } from "react";
import { Guest } from "../types/guest";
import { Admin } from "../types/admin";

interface AuthContextType {
  user: null | Guest;
  setUser: (user: Guest | null) => void;
  admin: null | Admin;
  setAdmin: (admin: Admin | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: (user) => {
    console.log(user);
  },
  admin: null,
  setAdmin: (admin) => {
    console.log(admin);
  },
});

export function useAuth(): AuthContextType {
  return useContext(AuthContext);
}

interface Props {
  children: ReactNode;
}

export const AuthProvider: React.FC = ({ children }: Props) => {
  const [user, setUser] = useState<null | Guest>(null);
  const [admin, setAdmin] = useState<null | Admin>(null);
  const value = { user, setUser, admin, setAdmin };
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};
