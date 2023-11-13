import Post from "../models/post.js";
import { expressjwt } from "express-jwt";
import dotenv from "dotenv";
dotenv.config();

// console.log("process.env.JWT_SECRET ", process.env.JWT_SECRET);

export const requireSignin = expressjwt({
   secret: process.env.JWT_SECRET,
   algorithms: ["HS256"],
});

export const canEditDeletePost = async (req, res, next) => {
   try {
      const post = await Post.findById(req.params._id);

      console.log("lllllllllll");

      if (req.auth._id != post.postedBy) {
         return res.status(400).send("Unauthorized!");
      } else {
         next();
      }
   } catch (error) {
      console.log(error);
   }
};
