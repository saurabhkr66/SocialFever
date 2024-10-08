import express from 'express';
import {getFeedPosts,getUserPosts,likePost} from "../controller/posts.js"
import { verifyToken } from '../middleware/auth.js';
const router=express.Router();

router.get("/",verifyToken,getFeedPosts)
router.get("/:usersId",verifyToken,getUserPosts);

router.patch("/:id/like",verifyToken,likePost);

export default router;