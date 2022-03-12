
import {Guest} from './guest'

export interface User extends Guest {
  createdAt: Date
  updateAt: Date
  deleteAt: Date
}