import cors from 'cors'
import express from 'express'
import router from './routes/RateRouter.js'

const app = express()
app.use(cors())

app.use('/rate',router)

export default app