import Joi from "joi";

export const authValidator = Joi.object({
    username: Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).required(),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])\S{8,20}$/).required()
});