import Joi from 'joi'


export const createUserSchema = Joi.object({
    email: Joi.string()
        .required()
        .email({
            minDomainSegments: 2
        }),
    password: Joi.string()
        .required()
        .min(8)
        .max(8)
        .alphanum(),
    userName: Joi.string()
        .min(2)
        .max(50),
    userLastName: Joi.string()
        .min(2)
        .max(50),
    userImg: Joi.string()
        .uri(),
    country: Joi.string()
        .min(2)
        .max(50),
})