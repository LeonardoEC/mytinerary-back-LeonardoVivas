import { Schema, model, Types } from "mongoose"

let colletion = 'cities'
const schema = new Schema({
    name: { type: String, require:true},
    country: { type: String, require:true},
    description: { type: String,},
    flag: { type: String, require:true},
    currency: { type: String, require:true},
    map: { type: String, require:true},
    img: { type: String, require:true},
    itineary: [{type: Types.ObjectId, ref: 'itineary'}],
}, {
    timestamps: true
})

const Citie = model(colletion, schema)

export default Citie