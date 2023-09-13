import express from 'express'

import itineraryController from '../controllers/itineraries.controller.js'

const router = express.Router()

const {getItinerary, postItinerary, getItineraryById, puttItinerary, deleteItinerary} = itineraryController

import passport from '../middlewares/passport.js'

router.get('/',getItinerary)
router.get('/:id', getItineraryById)
router.post('/', passport.authenticate('jwt', {session: false}), postItinerary)
router.put('/:id',puttItinerary)
router.delete('/:id', deleteItinerary)

export default router