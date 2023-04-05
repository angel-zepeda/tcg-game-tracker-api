import { Schema, Types, model } from 'mongoose'

import { ITournamentModel } from '../types'

const tournamentSchema = new Schema({
  deck: { type: String, required: true },
  date: { type: String, required: true },
  name: { type: String, required: true },
  official: { type: Boolean, default: false },
  userId: { type: Types.ObjectId, ref: 'User' },
  tcg: { type: String, enum: ['ygo', 'mtg', 'pkm'] },
  createdAt: { type: String },
  updatedAt: { type: String },
})

export const Tournament = model<ITournamentModel>('Tournament', tournamentSchema)
