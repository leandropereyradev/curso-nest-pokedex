import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB_URI: Joi.required(),
  DB_NAME: Joi.required(),
  PORT: Joi.number().required(),
  DEFAULT_LIMIT: Joi.number().required(),
});
