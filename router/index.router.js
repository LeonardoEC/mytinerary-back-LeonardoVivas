import express from 'express'
import citiesRouter from './cities.router.js'

const router = express.Router()

router.get('/',(req, res) =>{
    res.send('Hello world')
})


router.use('/cities', citiesRouter)

export default router