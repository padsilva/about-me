import Joi from 'joi'

const fieldsValidation = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  subject: Joi.string().required(),
  message: Joi.string().required(),
  captcha: Joi.string().required()
}

const getFieldErrors = (objError) => {
  const errors = {}

  console.log('objError', objError)

  objError.error &&
    objError.error.details.forEach(
      (err) => (errors[err.path.join('.')] = err.type)
    )

  console.log('errors', errors)
  return errors
}

export const sendEmailValidate = (values) => {
  const schema = Joi.object(fieldsValidation)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
