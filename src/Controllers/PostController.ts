import { Request, Response } from "express";
import PostModel from "../Models/PostModel";
import { ValidatePosts } from "../validation";
// import redis, { RedisClientType } from "redis";

// redis config
// const redisClient: RedisClientType = redis.createClient();
// const EXPIRATION: number = 3600; // 1hr

// const getSetCache = (key, callback) => {
//   return new Promise((resolve, reject) => {
//     redisClient.get(key, async (error, data) => {
//       if (error) return reject(error);
//       if (data != null) return resolve(JSON.parse(data));
//       const fetchedData = await callback();
//       redisClient.SETEX(key, EXPIRATION, JSON.stringify(fetchedData));
//       resolve(fetchedData);
//     });
//   });
// };

// get all posts by all users
export const getPosts = async (req: Request, res: Response) => {
  try {
    // const posts = await getSetCache("posts", async () => {
    const data = await PostModel.find();
    // return data;
    // });
    // res.status(200).json(posts);
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: error });
  }
};

//get single post, all users
export const getPost = async (req: Request, res: Response) => {
  try {
    // const post = await getSetCache(`post=${req.params.id}`, async () => {
    const data = await PostModel.findById(req.params.id);
    // return data;
    // });
    // res.status(200).json(post);
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: error });
  }
};

// add posts for logged in users
export const createPost = async (req: Request, res: Response) => {
  // validate data
  const { error } = ValidatePosts(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const post = new PostModel({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    date: req.body.date,
  });

  try {
    const SavedPost = await post.save();
    res.status(200).json(SavedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

// delete post for logged in users
export const deletePost = async (req: Request, res: Response) => {
  try {
    const DeletedPost = await PostModel.remove({ _id: req.params.id });
    res.status(200).json(DeletedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

// update title for logged in users
export const updateTitle = async (req: Request, res: Response) => {
  try {
    const UpdatedTitle = await PostModel.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.status(200).json(UpdatedTitle);
  } catch (error) {
    res.json({ message: error });
  }
};

// update whole post for logged in users
export const updatePost = async (req: Request, res: Response) => {
  try {
    const WholeUpdatedPost = await PostModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          image: req.body.image,
        },
      }
    );
    res.status(200).json(WholeUpdatedPost);
  } catch (error) {
    res.json({ message: error });
  }
};
