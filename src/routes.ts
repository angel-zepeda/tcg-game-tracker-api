import { Router, Request, Response } from 'express'
import { tournamentController, userController } from './controllers'
import { Auth } from './middlewares/auth'

const router: Router = Router()

router.get('/healthy', (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hola mundo!' })
})

// User routes
router.get('/users', userController.getAll)
router.get('/user/:id', userController.getById)
router.post('/user/signup', userController.signup)
router.post('/user/signin', userController.signin)

//Tournament routes
router.get('/tournaments', tournamentController.allTournaments)
router.post('/tournaments', [Auth], tournamentController.createTournament)

export default router
