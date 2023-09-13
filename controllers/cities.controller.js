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
        if (req.query.itinearyId) {
            queries.itineary = req.query.itinearyId
        }

        try {

            let cities

            if (req.query.itineary === 'true') {
                cities = await Citie.find(queries).populate('itineary')
            } else {
                cities = await Citie.find(queries)
            }

            if (cities.length > 0) {
                return res.status(200).json({
                    success: true,
                    cities
                })
            }

            return res.status(404).json({
                success: false,
                message: 'No result found'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error getting cities'
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
                message: 'The city was not found'
            })


        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error getting city'
            })
        }
    },
    postCities: async (req, res) => {

        try {
            const newCitie = await Citie.create(req.body)

            return res.status(201).json({
                success: true,
                message: 'City created'
            })
        } catch (error) {
            console.log(error)

            return res.status(500).json({
                success: false,
                message: 'Error creating city'
            })
        }


        // res.send("El post esta activo")
    },
    putCities: async (req, res) => {
        try {
            await Citie.updateOne({ _id: req.params.id }, req.body)

            return res.status(200).json({
                success: true,
                message: 'Updated city'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error updating city'
            })
        }
    },
    deletCities: async (req, res) => {
        try {
            await Citie.deleteOne({ _id: req.params.id })
            return res.status(200).json({
                success: true,
                message: 'City removed'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error deleting city'
            })
        }
    }
}

export default controller