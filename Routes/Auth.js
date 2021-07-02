import express from "express";
import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";
import { ValidateRegistration, ValidateLogin } from "../validation.js";
<<<<<<< HEAD

const router = express.Router();

// get all users
router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.send({ users });
	} catch (error) {
		res.status(400).send(error);
	}
});

=======
const router = express.Router();

// Registration
>>>>>>> dc2f56388e6a8682c99267e8b52d21113552e8fb
router.post("/register", async (req, res) => {
	// validate data from user
	const { error } = ValidateRegistration(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//check if user is in database
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists) return res.status(400).send("Email already exists");

	// check if username exists
	const usernameExists = await User.findOne({ username: req.body.username });
	if (usernameExists) return res.status(400).send("Username has been taken");

	//hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
	});
	try {
		const savedUser = await user.save();
		res.send({ user: user.id });
	} catch (error) {
		res.status(400).send(error);
	}
});

// Login
router.post("/login", async (req, res) => {
	// validate data from user
	const { error } = ValidateLogin(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// check if username exists
	const user = await User.findOne({ username: req.body.username });
	if (!user) return res.status(400).send("Username or password is invalid");

	// check if password is valid
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send("Invalid Password");

	// create a token for logged in user
	const token = jwt.sign({ _id: user._id }, process.env.SECRET);

	res.header("auth_token", token).send(token);
});

export default router;
