import express from "express";

import { createTweet, getTweet } from "../../controllers/tweet-contoller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { SignUp, login } from "../../controllers/user-controller.js";

const router = express.Router();

router.post("/tweets", createTweet);
router.get("/tweets/:id", getTweet);

router.post("/likes/toggle", toggleLike);

router.post("/comments", createComment);

router.post("/signup", SignUp);
router.post("/login", login);

export default router;
