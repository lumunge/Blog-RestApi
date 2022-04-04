import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
  updateTitle,
} from "../Controllers/PostController";
import verify from "../Middleware/VerifyToken";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verify, createPost);
router.delete("/:id", verify, deletePost);
router.patch("/:id", verify, updateTitle);
router.put("/:id", verify, updatePost);

export default router;
