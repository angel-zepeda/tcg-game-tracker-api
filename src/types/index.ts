import { Document, Types } from 'mongoose'
import { Request } from 'express'

export type TCGs = 'ygo' | 'mtg' | 'pkm'

export interface IUserModel extends Document {
  name: string
  email: string
  password: string
  lastLoginAt: string
  authToken: string
  createdAt: string
  updatedAt: string
}

export interface ITournamentModel extends Document {
  deck: string
  date: string
  name: string
  official: boolean
  userId: Types.ObjectId
  tcg: TCGs
  createdAt: string
  updatedAt: string
}

export interface IMatchModel extends Document {
  win: boolean
  tournamentId: Types.ObjectId
  opponentDeck: string
  createdAt: string
  updatedAt: string
}

export interface ApiRequest extends Request {
  user: IUserModel
}
