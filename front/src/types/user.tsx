import {Guest} from './guest'

export interface User extends Guest {
  id: string
  username: string
  password: string
  avatarURL: string
  createdAt: Date
  updateAt: Date
  deleteAt: Date
}