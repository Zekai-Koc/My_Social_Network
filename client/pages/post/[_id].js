import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import UserRoute from "../../components/routes/UserRoute";
import { Toast } from "react-toastify";
import Post from "../../components/cards/Post";
import Link from "next/link";
import { RollbackOutlined } from "@ant-design/icons";

const PostComments = () => {
   const [post, setPost] = useState({});
   const router = useRouter();
   const _id = router.query._id;

   useEffect(() => {
      if (_id) fetchPost();
   }, [_id]);

   const fetchPost = async () => {
      try {
         const { data } = await axios.get(`/post/userpost/${_id}`);
         console.log(data);
         setPost(data);
      } catch (error) {
         console.log(error);
      }
   };

   const removeComment = async (postId, comment) => {
      console.log(postId, comment);

      let answer = window.confirm("Are you sure to delete your post?");
      if (!answer) return;

      try {
         const { data } = await axios.put(`/post/removecomment`, {
            postId,
            comment,
         });
         console.log("comment removed: ", data);
         fetchPost();
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="container-fluid">
         <div className="row py-5 text-light bg-default-image">
            <div className="col text-center">
               <h1>News Feed</h1>
            </div>
         </div>
         <div className="container col-md-8 offset-md-2 pt-3">
            <Post
               post={post}
               commentsCount={100}
               removeComment={removeComment}
            />
         </div>

         <Link href="/user/dashboard" className="d-flex justify-content-center">
            <RollbackOutlined />
         </Link>
      </div>
   );
};

export default PostComments;
