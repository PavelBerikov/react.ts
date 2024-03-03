import Joi from "joi";

export const authValidator = Joi.object({
    username: Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.pattern.base.required': 'err'
    }),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])\S{8,20}$/).required().messages({
        'string.pattern.base':'err'
    })
});