import { Schema, model, Types } from "mongoose";

const colletion = 'user';

const schema = new Schema({
    userName: { type: String, required: true },
    userLastName: { type: String, required: true },
    userImg: { type: String, default:'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png' },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default:"user"},
    country: { type: String },
    online: { type: Boolean, default: false },
    verified: { type: Boolean, default: true },
    verified_code: { type: String },
    itineary: {type: Types.ObjectId, ref: 'itineary'}
},{
    timestamps: true
})

const User = model(colletion, schema)

export default User