import { Schema, model,  Types} from "mongoose";

const colletion = 'itineary'
const schema = new Schema({
    itineraryName: { type: String, required: true },
    price: {type: Number, min:0, max:5, required:true},
    description: { type: String },
    duration: { type: Number, required: true },
    like: { type: Number, default:0 },
    comments: [{ type:String }],
    hashtag: [{type: String}],
    user: {type: Types.ObjectId, ref: 'user',required: true},
    cities: { type: Types.ObjectId, ref:'cities', required: true}
},{
    timestamps: true
})

const Itineary = model(colletion, schema)

export default Itineary