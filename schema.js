const Joi = require("joi");

const stateSchema = Joi.object({
  name: Joi.string().required(),
  phrase: Joi.string().required(),
  coordinates : Joi.array().items(Joi.number()),


});
