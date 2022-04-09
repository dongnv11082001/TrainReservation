import React, {useState, useContext, createContext, ReactElement, useEffect} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import {useLocation} from 'react-router-dom'
import {showNoti} from '../utils/showNoti'

type AuthenParams = {
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  confirmPassword?: string,
  phoneNumber: string,
  avatarURL?: string,
}

interface AuthContextType {
  isLogin: boolean
  authenticate: (form: AuthenParams) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isLogin: false,
  authenticate: () => console.log('Login method have not been initialize yet'),
  logout: () => console.log('Logout method have not been initialize yet')
})

const cookies = new Cookies()

export function useAuth(): AuthContextType {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({children}): ReactElement => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    fetchLoginStatusByToken()
  }, [])

  const authenticate = async (form: AuthenParams) => {
    const {username, password, phoneNumber, avatarURL, firstName, lastName} = form
    const URL = 'https://apihere.com'

    try {
      if (location.pathname != 'sign_up' && location.pathname != 'sign_in') {
        console.error('Invalid pathname for Authenticate function')
        return
      }
      const {
        data: {token, userId, fullName}
      } = await axios.post(`${URL}/${location.pathname}`, {
        username,
        password,
        firstName,
        lastName,
        phoneNumber,
        avatarURL,
      })
      cookies.set('token', token)
      cookies.set('username', username)
      cookies.set('fullName', fullName)
      cookies.set('userId', userId)

      if (location.pathname === 'sign_up') {
        cookies.set('phoneNumber', phoneNumber)
        cookies.set('avatarURL', avatarURL)
      }
      showNoti('success', 'Login Successfully')
    } catch (err) {
      showNoti('error', 'Login Failed')
    }
  }

  const logout = async () => {
    cookies.remove('token')
    cookies.remove('username')
    cookies.remove('fullName')
    cookies.remove('userId')
    setIsLogin(false)
  }

  const fetchLoginStatusByToken = async () => {
    const authToken = cookies.get('token')
    const res = await axios.post<boolean>('', authToken)
    setIsLogin(res.data)
  }

  const value = {authenticate, logout, isLogin}

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  )
}
