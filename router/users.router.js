import express from 'express'

import userController from '../controllers/users.controller.js'

import { validator } from '../middlewares/validator.js'
import { createUserSchema } from '../schema/user.schema.js'




const router = express.Router()

const {getUser, postUser, getUserById, putUser, deleteUser} = userController

router.get('/',getUser)
router.get('/:id',getUserById)
router.post('/',validator(createUserSchema),postUser)
router.put('/:id',putUser)
router.delete('/:id',deleteUser)


export default router