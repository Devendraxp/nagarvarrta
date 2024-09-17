const Joi = require("joi");

module.exports.stateSchema = Joi.object({
  name: Joi.string().required(),
  phrase: Joi.string().required(),
  geometry : Joi.object({
    type : Joi.string(),
    coordinate : Joi.array().items(Joi.number()).required(),
  }),
  history: Joi.object({
    war : Joi.array().items(Joi.string()).required(),
    ecto : Joi.string().required(),
    artH : Joi.string().required(),
  }),
  speciality : Joi.array().items(Joi.string()).required(),
  route : Joi.string().required(),
  HnC : Joi.object({
    MnD : Joi.array().items(Joi.string()).required(),
    attire : Joi.string().required(),
    festivals : Joi.array().items(Joi.string()).required(),
    folkTales : Joi.array().items(Joi.string()).required(),
    FnF : Joi.array().items(Joi.string()).required(),
    lifestyle : Joi.array().items(Joi.string()).required(),
  }),
  image : Joi.array().items(Joi.object({
    imgUrl : Joi.string().allow("",null),
    filename : Joi.string().allow("",null),
  })).allow(null),

});

module.exports.citySchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    state: Joi.string().required(),
    route: Joi.string().required(),
    croute: Joi.string().required(),

    geometry : Joi.object({
      type : Joi.string(),
      coordinate : Joi.array().items(Joi.number()).required(),
    }),
    history: Joi.object({
      war : Joi.array().items(Joi.string()).required(),
      ecto : Joi.string().required(),
      artH : Joi.string().required(),
    }),
    speciality : Joi.array().items(Joi.string()).required(),
    route : Joi.string().required(),
    GnL : Joi.array().items(Joi.string()).required(),
    images : Joi.array().items(Joi.object({
      imgUrl : Joi.string().allow("",null),
      filename : Joi.string().allow("",null),
    })).allow(null),
  
  });
