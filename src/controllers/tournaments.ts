import { Request, Response } from 'express'
import { Tournament, tournamentPayloadValidation } from '../models'

class TournamentController {
  allTournaments(_: Request, res: Response) {
    try {
      return res.status(200).json({})
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  async createTournament(req: Request, res: Response) {
    try {
      const { body, user } = req
      const { deck, date, name, official, tcg } = body

      tournamentPayloadValidation({
        deck,
        date,
        name,
        official,
        tcg,
        userId: user.id,
      })

      const newTournament = await new Tournament({
        deck,
        date,
        name,
        official,
        tcg,
        userId: user.id,
      }).save()

      if (!newTournament) return res.status(400).json({ message: 'Cannot create a new tournament' })

      return res.status(200).json({ message: 'New Tournament created' })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}

export const tournamentController = new TournamentController()
