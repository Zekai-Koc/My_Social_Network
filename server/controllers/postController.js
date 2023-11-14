import Post from "../models/post.js";
import User from "../models/user.js";
import cloudinary from "cloudinary";

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_KEY,
   api_secret: process.env.CLOUDINARY_SECRET,
});

export const createPost = async (req, res) => {
   // console.log(req.auth);
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
      // console.log("Uploaded image url:", result.url);
      res.json({
         url: result.secure_url,
         public_id: result.public_id,
      });
   } catch (error) {
      console.log(error);
   }
};

export const postsByUser = async (req, res) => {
   // console.log(req.auth);

   try {
      // const posts = await Post.find({ postedBy: req.auth._id })
      const posts = await Post.find()
         .populate("postedBy", "_id name image")
         .sort({ createdAt: -1 })
         .limit(10);

      // console.log(posts);

      res.json(posts);
   } catch (error) {
      console.log(error);
   }
};

export const userPost = async (req, res) => {
   // console.log("req.params._id: ", req.params._id);
   try {
      const post = await Post.findById(req.params._id);
      // console.log(post);
      res.json(post);
   } catch (error) {
      console.log(error);
   }
};

export const updatePost = async (req, res) => {
   try {
      const post = await Post.findByIdAndUpdate(req.params._id, req.body, {
         new: true,
      });
      console.log("pppppppppppp post: ", post);

      res.json(post);
   } catch (error) {
      console.log(error);
   }
};

export const deletePost = async (req, res) => {
   try {
      console.log("kkkkkkkkkkkk", req.params._id);
      const post = await Post.findByIdAndDelete(req.params._id);

      if (post.image && post.image.public_id) {
         const image = await cloudinary.uploader.destroy(post.image.public_id);
      }

      res.json({ ok: true });
   } catch (error) {
      console.log(error);
   }
};

export const newsFeed = async (req, res) => {
   // console.log("req.auth: ", req.auth._id);
   try {
      const user = await User.findById(req.auth._id);

      let following = user.following;
      following.push(user._id);

      const posts = await Post.find({ postedBy: { $in: following } })
         .populate("postedBy", "_id name image")
         .populate("comments.postedBy", "_id name image")
         .sort({ createdAt: -1 })
         .limit(10);

      // console.log("posts: ", posts);

      res.json(posts);
   } catch (error) {
      console.log(error);
   }
};

export const likePost = async (req, res) => {
   try {
      const posts = await Post.findByIdAndUpdate(
         req.body._id,
         {
            $addToSet: { likes: req.auth._id },
         },
         { new: true }
      );
      res.json(posts);
   } catch (error) {
      console.log(error);
   }
};

export const unlikePost = async (req, res) => {
   try {
      const posts = await Post.findByIdAndUpdate(
         req.body._id,
         {
            $pull: { likes: req.auth._id },
         },
         { new: true }
      );
      res.json(posts);
   } catch (error) {
      console.log(error);
   }
};

export const addComment = async (req, res) => {
   try {
      const { postId, comment } = req.body;

      const post = await Post.findByIdAndUpdate(
         postId,
         {
            $push: { comments: { text: comment, postedBy: req.auth._id } },
         },
         { new: true }
      )
         .populate("postedBy", "_id name image")
         .populate("comments.postedBy", "_id name image");
      res.json(post);
   } catch (error) {
      console.log(error);
   }
};

export const removeComment = async (req, res) => {
   try {
      const { postId, comment } = req.body;

      const post = await Post.findByIdAndUpdate(
         postId,
         {
            $pull: { comments: { _id: comment._id } },
         },
         { new: true }
      );

      res.json(post);
   } catch (error) {
      console.log(error);
   }
};
