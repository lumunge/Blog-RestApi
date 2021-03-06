import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModel from "../Models/UserModel";
import { ValidateRegistration, ValidateLogin } from "../validation";

export const signup = async (req: Request, res: Response) => {
  // validate data from user
  const { error } = ValidateRegistration(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if user is in database
  const emailExists = await UserModel.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists");

  // check if username exists
  const usernameExists = await UserModel.findOne({
    username: req.body.username,
  });
  if (usernameExists) return res.status(400).send("Username has been taken");

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.status(200).send({ user: user.id });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const signin = async (req: Request, res: Response) => {
  dotenv.config();
  // validate data from user
  const { error } = ValidateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if username exists
  const user = await UserModel.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Username or password is invalid");

  // check if password is valid
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid Password");

  // create a token for logged in user
  const token = jwt.sign({ _id: user._id }, process.env.SECRET as string);

  res.header("auth_token", token).send(token);
};
