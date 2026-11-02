import { Router } from 'express'
import { getRate } from '../controllers/RateController.js'

const router = Router()

router.get('/:currency', getRate)

export default router
