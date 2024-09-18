const { stateSchema, citySchema } = require('./schema.js');
const ExpressError = require('./ExpressError.js');


const validateState = (req, res, next) => {
  const { error } = stateSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
  next();
}

const validateCity = (req, res, next) => {
  const { error } = citySchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
}