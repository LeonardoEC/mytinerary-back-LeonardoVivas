import User from "../models/User.js";

const controller = {
    getUser: async (req, res) => {

        let queries = {}

        if (req.query.userName) {
            queries.userName = new RegExp(`^${req.query.userName}`, 'i')
        }

        try {
            const user = await User.find(queries)

            if (user.length > 0) {
                return res.status(200).json({
                    success: true,
                    user
                })
            }

            return res.status(404).json({
                success: false,
                message: 'No se encontro resultado'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener los usuarios'
            })
        }
    },
    getUserById: async (req, res) => {
        try {
            const oneUser = await User.findById(req.params.id)
            if (oneUser) {
                return res.status(200).json({
                    success: true,
                    user: oneUser
                })
            }
            return res.status(404).json({
                success: false,
                message: 'No se encontro el usuario'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener el usuario'
            })

        }
    },
    postUser: async (req, res) => {

        try {
            const newUser = await User.create(req.body)
            return res.status(201).json({
                success: true,
                message: 'Usuario creado'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al crear el Usuario'
            })
        }
    },
    putUser: async (req, res) => {
        try {
            await User.updateOne({ _id: req.params.id }, req.body)
            return res.status(200).json({
                success: true,
                message: 'Usuario actualizado'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al actualizar el usuario'
            })
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.deleteOne({ _id: req.params.id })
            return res.status(200).json({
                success: true,
                message: 'Usuario eliminado'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al eliminar el usuario'
            })
        }
    }
}

export default controller