import type { User } from './user'

export interface Mentor extends Omit<User, 'professional'> {
  photo: string
  name: string
  category: string
  contact: string
}