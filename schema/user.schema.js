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
        .max(15)
        .alphanum(),
    userName: Joi.string()
        .required()
        .min(2)
        .max(50),
    userLastName: Joi.string()
        .required()
        .min(2)
        .max(50),
    country: Joi.string()
        .min(2)
        .max(50),
})

export const userSignIn = Joi.object({
    email: Joi.string()
        .required()
        .email({
            minDomainSegments: 2
        })
        .messages({
            'any.required': 'Email is required'
        }),
    password: Joi.string()
        .required()
        .min(8)
        .max(15)
        .alphanum()
})