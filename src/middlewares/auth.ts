import { NextFunction, Request, Response } from 'express'
import { User } from '../models'

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send({ error: 'access-token-is-missing' })
    }

    const authToken = req.headers.authorization.replace(/['"]+/g, '')

    if (authToken) {
      console.log(authToken)
      const user = await User.findOne({ authToken })

      if (!user) return res.status(403).json({ message: 'UnAuthorized, user not found' })

      req.user = user
      return next()
    }
  } catch (error) {
    return res.status(500).json({ error })
  }
}
