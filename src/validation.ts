import Joi from "joi";

// registration validation
export const ValidateRegistration = (user: object) => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(30).required(),
    email: Joi.string().email().min(5).max(50).optional(),
    password: Joi.string().min(6).required(),
  }).options({ abortEarly: false });

  return schema.validate(user);
};

// login validaion
export const ValidateLogin = (user: object) => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(30).required(),
    password: Joi.string().min(6).required(),
  }).options({ abortEarly: false });

  return schema.validate(user);
};

// validate posts
export const ValidatePosts = (post: object) => {
  const schema = Joi.object({
    title: Joi.string().min(5).required(),
    description: Joi.string().min(100).required(),
    image: Joi.string().required(),
  }).options({ abortEarly: false });

  return schema.validate(post);
};
