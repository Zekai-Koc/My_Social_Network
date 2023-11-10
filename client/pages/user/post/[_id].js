import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import UserRoute from "../../../components/routes/UserRoute";
import PostForm from "../../../components/forms/PostForm";
import PostList from "../../../components/cards/PostList";

const EditPost = () => {
   const [post, setPost] = useState({});
   const [content, setContent] = useState("");
   const [image, setImage] = useState({});
   const [uploading, setUploading] = useState(false);
   const router = useRouter();
   // console.log("router: ", router);
   const _id = router.query._id;

   useEffect(() => {
      if (_id) fetchPost();
   }, [_id]);

   const fetchPost = async () => {
      try {
         // const { data } = await axios.get(`/post/userpost:${_id}`);
         const { data } = await axios.get(`/post/userpost/${_id}`);
         // console.log("axios response data: ", data);
         setPost(data);
         setContent(data.content);
         setImage(data.image);
         // if (data.error) {
         //    toast.error(data.error);
         // } else {
         //    toast.success("Post fetched.");
         // }
      } catch (error) {
         console.log(error);
      }
   };

   const postSubmit = async (e) => {
      e.preventDefault();
      // console.log("submit post to update: ", content, image);

      try {
         const { data } = await axios.put(`/post/updatepost/${_id}`, {
            content,
            image,
         });
         console.log("axios response data: ", data);
         if (data.error) {
            toast.error(data.error);
         } else {
            fetchPost();
            toast.success("Post updated.");
            setContent("");
            setImage({});
            router.push("/user/dashboard");
         }
      } catch (error) {
         console.log(error);
      }
   };

   const handleImage = async (e) => {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("image", file);
      // console.log([...formData]);
      setUploading(true);
      try {
         const { data } = await axios.post("/post/uploadimage", formData);
         // console.log("Uploaded Image: ", data);

         setImage({
            url: data.url,
            public_id: data.public_id,
         });
         setUploading(false);
      } catch (error) {
         console.log(error);
         setUploading(false);
      }
   };

   return (
      <UserRoute>
         <div className="container-fluid">
            <div className="row py-5 bg-secondary text-light bg-default-image">
               <div className="col text-center">
                  <h1>News Feed</h1>
               </div>
            </div>

            <div className="row py-3">
               <div className="col-md-8 offset-md-2">
                  <PostForm
                     content={content}
                     setContent={setContent}
                     postSubmit={postSubmit}
                     handleImage={handleImage}
                     uploading={uploading}
                     image={image}
                  />
               </div>
            </div>
         </div>
      </UserRoute>
   );
};

export default EditPost;
