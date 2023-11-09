import express from "express";
import formidable from "express-formidable";

import { createPost, uploadImage } from "../controllers/postController.js";

import { requireSignin } from "../middlewares/index.js";
import post from "../models/post.js";

const router = express.Router();

router.post("/createpost", requireSignin, createPost);
router.post(
   "/uploadimage",
   requireSignin,
   formidable({ maxFieldsSize: 5 * 1024 * 1024 }),
   uploadImage
);

export default router;
