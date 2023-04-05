import { Schema, model } from 'mongoose'

import { IUserModel } from '../types'

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  lastLoginAt: { type: String },
  authToken: { type: String },
  createdAt: { type: String },
  updatedAt: { type: String },
})

export const User = model<IUserModel>('User', userSchema)
