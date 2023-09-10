import express from 'express'
import citiesRouter from './cities.router.js'
import itineraryRouter from './itineraries.router.js'
import userRouter from './users.router.js'
import authRouter from './auth.router.js'

const router = express.Router()

router.get('/',(req, res) =>{
    res.send('Hello world')
})


router.use('/cities', citiesRouter)
router.use('/itineraries', itineraryRouter)
router.use('/users', userRouter)
router.use('/auth', authRouter)

export default router