import { UserContext } from "../../context";
import { useContext, useState, useEffect } from "react";
import UserRoute from "../../components/routes/UserRoute";
import CreatePostForm from "../../components/forms/CreatePostForm.js";
import { useRouter } from "next/router.js";
import axios from "axios";
import { toast } from "react-toastify";
import PostList from "../../components/cards/PostList.js";

const Dashboard = () => {
   const [state, setState] = useContext(UserContext);
   const [content, setContent] = useState("");
   const [image, setImage] = useState({});
   const [uploading, setUploading] = useState(false);
   const [posts, setPosts] = useState([]);

   const router = useRouter();

   useEffect(() => {
      if (state && state.token) fetchUserPosts();
   }, [state && state.token]);

   const fetchUserPosts = async () => {
      try {
         const { data } = await axios.get(`/post/userposts`);
         console.log("axios response data: ", data);
         setPosts(data);
         // if (data.error) {
         //    toast.error(data.error);
         // } else {
         //    toast.success("Post created.");
         //    setContent("");
         //    setImage({});
         // }
      } catch (error) {
         console.log(error);
      }
   };

   const postSubmit = async (e) => {
      e.preventDefault();
      console.log("post: ", content);

      try {
         const { data } = await axios.post(`/post/createpost`, {
            content,
            image,
         });
         console.log("axios response data: ", data);
         if (data.error) {
            toast.error(data.error);
         } else {
            toast.success("Post created.");
            setContent("");
            setImage({});
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
               <div className="col-md-8">
                  <CreatePostForm
                     content={content}
                     setContent={setContent}
                     postSubmit={postSubmit}
                     handleImage={handleImage}
                     uploading={uploading}
                     image={image}
                  />
                  <br />
                  <PostList posts={posts} />
               </div>

               {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}

               <div className="col-md-4">Sidebar</div>
            </div>
         </div>
      </UserRoute>
   );
};

export default Dashboard;
