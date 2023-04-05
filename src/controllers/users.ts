import { Request, Response } from 'express'
import { hash, compare } from 'bcrypt'

import { User } from '../models'
import { generateToken } from '../utils/user'

class UserController {
  async getAll(_req: Request, res: Response) {
    try {
      const users = await User.find({})
      if (!users) return res.status(400).json({ message: 'NOT FOUND' })

      return res.status(200).json({ users })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const user = await User.findOne({ id })

      if (!user) return res.status(400).json({ message: 'NOT FOUND' })

      return res.status(200).json({ user })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  async signup(req: Request, res: Response) {
    try {
      const {
        body: { email, password, passwordConfirmation, username },
      } = req

      const emailTaken = await User.findOne({ email })

      if (emailTaken) return res.status(400).json({ message: 'Email is already taken' })
      if (password !== passwordConfirmation)
        return res.status(400).json({ message: 'Password must match' })

      const passwordEncrypted = await hash(password, 10)

      const newUser = await new User({
        email,
        username,
        password: passwordEncrypted,
        createdAt: new Date().toISOString(),
      }).save()

      if (!newUser) return res.status(500).json({ message: 'Can not create the user' })

      return res.status(202).json({ message: 'User created' })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  async signin(req: Request, res: Response) {
    try {
      const {
        body: { email, password },
      } = req

      const user = await User.findOne({ email })
      if (!user) return res.status(404).json({ message: 'User not found' })

      const match = await compare(password, user.password)
      if (!match) return res.status(500).json({ message: 'Password incorrect, try again!' })

      const authToken = generateToken()
      await user.update({ lastLoginAt: new Date().toISOString(), authToken })

      return res.status(200).json({ message: 'Signin successfull' })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}

export const userController = new UserController()
