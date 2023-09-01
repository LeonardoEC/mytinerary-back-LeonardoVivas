import { Schema, model, Types } from "mongoose";

const colletion = 'user';

const schema = new Schema({
    userName: { type: String, require: true },
    userLastName: { type: String, require: true },
    userImg: { type: String, require: true },
    correoElectronico: { type: String, required: true },
    password: { type: String, required: true },
    nickname: { type: String, require: true },
    itineary: {type: Types.ObjectId, ref: 'itineary'}
},{
    timestamps: true
})

const User = model(colletion, schema)

export default User