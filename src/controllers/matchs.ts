import { Request, Response } from 'express'

export const getAll = (_: Request, res: Response) => {
  try {
    return res.status(200).json({})
  } catch (error) {
    return res.status(500).json({ error })
  }
}

// export const create = (req: Request, res: Response) => {
//   try {
//     // const { body } = req
//     return res.status(200).json({ message: 'New Tournament created' })
//   } catch (error) {
//     return res.status(500).json({ error })
//   }
// }
