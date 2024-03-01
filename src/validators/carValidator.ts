import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-Я]{1,15}$/).required().messages({
        'string.pattern.base':'only letters',
        'string.required': 'Required!'
    }),
    price: Joi.number().required().max(1000000).min(0),
    year: Joi.number().required().max(new Date().getFullYear()).min(1990)
});
export {
    carValidator
};