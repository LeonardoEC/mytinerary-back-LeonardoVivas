import express from 'express'

import citieController from '../controllers/cities.controller.js'

const router = express.Router()

const {getCities, postCities, getCitiesById, putCities, deletCities} = citieController

router.get('/', getCities)
router.get('/:id', getCitiesById)
router.post('/', postCities)
router.put('/:id', putCities)
router.delete('/:id', deletCities)

export default router;