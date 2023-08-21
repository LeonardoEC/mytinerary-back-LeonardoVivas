import Citie from '../models/Citie.js'

const controller = {
    getCities: async (req, res) => {

        let queries = {}

        if (req.query.name) {
            queries.name = new RegExp(`^${req.query.name}`, 'i')
        }

        /* filtro cruzado ejemplo
                if(req.query.continent){
                    queries.continent = req.query.continent
                }
        */

        try {

            const cities = await Citie.find(queries)

            if (cities.length > 0) {

                return res.status(200).json({
                    success: true,
                    cities
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
                message: 'Error al obtener las ciudades'
            })
        }
    },
    getCitiesById: async (req, res) => {
        try {
            const oneCitie = await Citie.findById(req.params.id)

            if (oneCitie) {
                return res.status(200).json({
                    success: true,
                    citie: oneCitie
                })
            }

            return res.status(404).json({
                success: false,
                message: 'No se encontro la ciudad'
            })


        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener la ciudad'
            })
        }
    },
    postCities: async (req, res) => {

        try {
            const newCitie = await Citie.create(req.body)

            return res.status(201).json({
                success: true,
                message: 'Ciudad creada'
            })
        } catch (error) {
            console.log(error)

            return res.status(500).json({
                success: false,
                message: 'Error al crear la ciudad'
            })
        }


        // res.send("El post esta activo")
    },
    putCities: async (req, res) => {
        try {
            await Citie.updateOne({ _id: req.params.id }, req.body)

            return res.status(200).json({
                success: true,
                message: 'Ciudad actualizada'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al actualizar la ciudad'
            })
        }
    },
    deletCities: async (req, res) => {
        try {
            await Citie.deleteOne({_id: req.params.id})
            return res.status(200).json({
                success: true,
                message: 'Ciudad eliminada'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al eliminar la ciudad'
            })
        }
    }
}

export default controller