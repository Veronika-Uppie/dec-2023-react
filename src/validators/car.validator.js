import Joi from "joi";

Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Бренд має складатись з літер та містити 1-20 символів',
        'string.required':'Це поле обов\'язкове'
    }),
    price:Joi.number().min()
})