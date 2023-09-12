import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'


const controller = {
    signup: async (req, res, next) => {

        try {
            req.body.verified_code = crypto.randomBytes(10).toString('hex')
            req.body.password = bcryptjs.hashSync(req.body.password, 10)

            const user = await User.create(req.body)

            return res.status(201).json({
                success: true,
                message: 'Usuario registrado'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error al registrar el usuario'
            })
        }
    },

    signin: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { email: req.user.email },
                { online: true },
                { new: true }
            )

            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.userName,
                    lastname: user.userLastName,
                    img: user.userImg
                },
                process.env.SECRET,
                {
                    expiresIn: '10h'
                }
            )

            user.password = null
            return res.status(200).json({
                success: true,
                message: 'Usuario logueado correctamente',
                response: {
                    token,
                    user: {
                        name: user.userName,
                        lastname: user.userLastName,
                        img: user.userImg
                    }
                    
                }
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error al autenticar el usuario'
            })
        }
    },
    signout: async (req, res, next) => {
        try {
            const user = await User.findOneAndUpdate(
                {email: req.user.email},
                {online: false},
                {new: true}
            )
            return res.status(200).json({
                success:true,
                message: 'Usuario deslogeado'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error al autenticar el usuario'
            })
        }
    },
    
    token: async(req, res, next) => {
        const { user } = req
        try {
            return res.status(200).json({
                user: {
                    name: user.userName,
                    lastname: user.userLastName,
                    img: user.userImg
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

export default controller