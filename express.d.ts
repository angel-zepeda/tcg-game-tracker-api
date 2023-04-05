import { IUserModel } from './src/types'

declare global {
  namespace Express {
    interface Request {
      user: IUserModel
    }
  }
}
