import express from "express";
import Post from "../Models/Post.js";
import verify from "./verifyToken.js";

const router = express.Router();

// get all posts by all users
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.send(posts);
	} catch (error) {
		res.json({ message: error });
	}
});

// get post by id by all users
router.get("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.json(post);
	} catch (error) {
		res.json({ message: error });
	}
});

// add posts for logged in users
router.post("/", verify, async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
		image: req.body.image,
		date: req.body.date,
	});

	try {
		const SavedPost = await post.save();
		res.json(SavedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

// delete post for logged in users
router.delete("/:id", verify, async (req, res) => {
	try {
		const DeletedPost = await Post.remove({ _id: req.params.id });
		res.json(DeletedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

// update title for logged in users
router.patch("/:id", verify, async (req, res) => {
	try {
		const UpdatedTitle = await Post.updateOne(
			{ _id: req.params.id },
			{ $set: { title: req.body.title } }
		);
		res.json(UpdatedTitle);
	} catch (error) {
		res.json({ message: error });
	}
});

// update whole post for logged in users
router.put("/:id", verify, async (req, res) => {
	try {
		const WholeUpdatedPost = await Post.findOneAndUpdate(
			{ _id: req.params.id },
			{
				$set: {
					title: req.body.title,
					description: req.body.description,
					image: req.body.image,
				},
			}
		);
		res.json(WholeUpdatedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

export default router;
