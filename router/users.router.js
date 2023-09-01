import express from 'express'

import userController from '../controllers/users.controller.js'

const router = express.Router()

const {getUser, postUser, getUserById, putUser, deleteUser} = userController

router.get('/',getUser)
router.get('/:id',getUserById)
router.post('/',postUser)
router.put('/:id',putUser)
router.delete('/:id',deleteUser)


export default router