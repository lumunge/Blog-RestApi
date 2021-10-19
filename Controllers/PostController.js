import PostModel from "../Models/PostModel.js";
import { ValidatePosts } from "../validation.js";

// get all posts by all users
export const getPosts = async (req, res) => {
	try {
		const posts = await PostModel.find();
		res.status(200).json(posts);
	} catch (error) {
		res.json({ message: error });
	}
};

//get single post, all users
export const getPost = async (req, res) => {
	try {
		const post = await PostModel.findById(req.params.id);
		res.status(200).json(post);
	} catch (error) {
		res.json({ message: error });
	}
};

// add posts for logged in users
export const createPost = async (req, res) => {
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
export const deletePost = async (req, res) => {
	try {
		const DeletedPost = await PostModel.remove({ _id: req.params.id });
		res.status(200).json(DeletedPost);
	} catch (error) {
		res.json({ message: error });
	}
};

// update title for logged in users
export const updateTitle = async (req, res) => {
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
export const updatePost = async (req, res) => {
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
