import { randomBytes } from 'crypto'

export const generateToken = () => {
  return randomBytes(128).toString('base64')
}
