import User from "../models/User.js"

export const isAdmin = async (req,res,next)  => {

    try {

        const user = await User.findById(req.query.userId)

        if(user.role == 'admin') {
            return next()
        } return res.status(401).json({
            succes: false,
            message: 'Usuario no autorizado para eliminar elementos'
        })

    } catch(error){
        return res.status(500).json({
            succes: false,
            message: 'Iternal server error isAdmin middleware'
        })
    }

    

    
}