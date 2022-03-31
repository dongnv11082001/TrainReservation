import {Guest} from './guest'

export interface User extends Guest {
  id?: number
  username: string
  password: string
  avatarURL?: string
  createdAt: Date
  updateAt: Date
  deleteAt: Date
  gender: 'male' | 'female'
}