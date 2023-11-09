import Post from "../models/post.js";
import cloudinary from "cloudinary";

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_KEY,
   api_secret: process.env.CLOUDINARY_SECRET,
});

export const createPost = async (req, res) => {
   console.log(req.auth);
   const { content, image } = req.body;
   if (!content) {
      return res.json({ error: "Content is required!" });
   }

   try {
      const post = new Post({ content, image, postedBy: req.auth._id });
      await post.save();
      return res.json(post);
   } catch (error) {
      console.log(error);
      return res.sendStatus(400);
   }
};

export const uploadImage = async (req, res) => {
   // console.log(" ++++++++++++++++++++++ ", req.files);

   try {
      const result = await cloudinary.uploader.upload(req.files.image.path);
      console.log("Uploaded image url:", result.url);
      res.json({
         url: result.secure_url,
         public_id: result.public_id,
      });
   } catch (error) {
      console.log(error);
   }
};

export const postsByUser = async (req, res) => {
   console.log(req.auth);

   try {
      const posts = await Post.find({ postedBy: req.auth._id })
         .populate("postedBy", "_id name image")
         .sort({ createdAt: -1 })
         .limit(10);

      console.log(posts);

      res.json(posts);
   } catch (error) {
      console.log(error);
   }
};
