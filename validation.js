import Joi from "joi";

// registration validation
export const ValidateRegistration = (user) => {
	const schema = Joi.object({
		username: Joi.string().min(5).max(30).required(),
		email: Joi.string().email().min(5).max(50).optional(),
		password: Joi.string().min(6).required(),
	}).options({ abortEarly: false });

	return schema.validate(user);
};

// export default ValidateRegistration;

// login validaion
export const ValidateLogin = (user) => {
	const schema = Joi.object({
		username: Joi.string().min(5).max(30).required(),
		password: Joi.string().min(6).required(),
	}).options({ abortEarly: false });

	return schema.validate(user);
};

// export default ValidateLogin;
