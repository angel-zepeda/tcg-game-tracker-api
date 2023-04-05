import { Schema, Types, model } from 'mongoose'

import { IMatchModel } from '../types'

const matchSchema = new Schema({
  win: { type: Boolean, required: true, default: false },
  opponentDeck: { type: String, required: true },
  tournamentId: { type: Types.ObjectId, ref: 'Tournament' },
  createdAt: { type: String },
  updatedAt: { type: String },
})

export const Match = model<IMatchModel>('Match', matchSchema)
