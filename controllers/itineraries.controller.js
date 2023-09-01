import Itinerary from '../models/Itinerary.js'

const controller = {
    getItinerary: async(req,res) => {
        let queries = {}

        if (req.query.itineraryName){
            queries.itineraryName = new RegExp(`^${req.query.itineraryName}`, 'i')
        }

        if(req.query.citiesId){
            queries.cities = req.query.citiesId
        }

        try{
            const itinerary = await Itinerary.find(queries).populate('user')

            if(itinerary.length > 0) {
                return res.status(200).json({
                    success: true,
                    itinerary
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
                message: 'Error al obtener los itinerarios'
            })
        }
    },
    getItineraryById: async(req,res) => {
        try{
            const oneItinerary = await Itinerary.findById(req.params.id)
            if(oneItinerary){
                return res.status(200).json({
                    success: true,
                    itinerary: oneItinerary
                })
            }
            return res.status(404).json({
                success: false,
                message: 'No se encontro el itinerario'
            })
        } catch(error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al obtener el itinerario'
            })

        }
    },
    postItinerary: async(req, res) => {
        try{
            const newItinerary = await Itinerary.create(req.body)
            return res.status(201).json({
                success:true,
                message: 'Itinerario creado'
            })
        } catch(error){
            console.log(error)
            return res.status(500).json({
                success:false,
                message: 'Error al crear el Itinerario'
            })
        }
    },
    puttItinerary: async(req, res) => {
        try{
            await Itinerary.updateOne({_id: req.params.id}, req.body)
            return res.status(200).json({
                success:true,
                message: 'Itinerario actualizado'
            })
        } catch(error){
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al actualizar el itinerario'
            })
        }
    },
    deleteItinerary: async(req, res) => {
        try{
            await Itinerary.deleteOne({_id: req.params.id})
            return res.status(200).json({
                success:true,
                message: 'Itinerario eliminado'
            })
        } catch(error){
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error al eliminar el itinerario'
            })
        }
    }
}

export default controller