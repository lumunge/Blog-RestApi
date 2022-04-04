import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  title: string;
  description: string;
  image: string;
}

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model<UserDocument>("Posts", PostSchema);

export default PostModel;
