import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<UserDocument>("User", UserSchema);

export default UserModel;
