import express from "express";
import formidable from "express-formidable";

import {
   createPost,
   uploadImage,
   postsByUser,
   userPost,
   updatePost,
   deletePost,
   newsFeed,
   likePost,
   unlikePost,
   addComment,
   removeComment,
   totalPosts,
   posts,
   getPost,
} from "../controllers/postController.js";

import { requireSignin, canEditDeletePost } from "../middlewares/index.js";
// import post from "../models/post.js";

const router = express.Router();

router.post("/createpost", requireSignin, createPost);
router.post(
   "/uploadimage",
   requireSignin,
   formidable({ maxFieldsSize: 5 * 1024 * 1024 }),
   uploadImage
);

router.get("/userposts", requireSignin, postsByUser); // check if it still needed!
router.get("/userpost/:_id", requireSignin, userPost);

router.put("/updatepost/:_id", requireSignin, canEditDeletePost, updatePost);
router.delete("/deletepost/:_id", requireSignin, canEditDeletePost, deletePost);

router.get("/newsfeed/:page", requireSignin, newsFeed);

router.put("/likepost", requireSignin, likePost);
router.put("/unlikepost", requireSignin, unlikePost);

router.put("/addcomment", requireSignin, addComment);
router.put("/removecomment", requireSignin, removeComment);

router.get("/totalposts", totalPosts);

router.get("/posts", posts);

router.get("/post/:_id", getPost);

export default router;
