import { UserContext } from "../../context";
import { useContext, useState, useEffect } from "react";
import UserRoute from "../../components/routes/UserRoute";
import PostForm from "../../components/forms/PostForm.js";
import { useRouter } from "next/router.js";
import axios from "axios";
import { toast } from "react-toastify";
import PostList from "../../components/cards/PostList.js";
import People from "../../components/cards/People.js";

const Dashboard = () => {
   const [state, setState] = useContext(UserContext);
   const [content, setContent] = useState("");
   const [image, setImage] = useState({});
   const [uploading, setUploading] = useState(false);
   const [posts, setPosts] = useState([]);
   const [people, setPeople] = useState([]);

   const router = useRouter();

   useEffect(() => {
      if (state && state.token) {
         newsFeed();
         findPeople();
      }
   }, [state && state.token]);

   const newsFeed = async () => {
      try {
         const { data } = await axios.get(`/post/newsfeed`);
         setPosts(data);
         if (data.error) {
            toast.error(data.error);
         }
      } catch (error) {
         console.log(error);
      }
   };

   const findPeople = async () => {
      try {
         const { data } = await axios.get(`/auth/findpeople`);
         setPeople(data);
         if (data.error) {
            toast.error(data.error);
         }
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
         // console.log("axios response data: ", data);
         if (data.error) {
            toast.error(data.error);
         } else {
            newsFeed();
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

   const handleDelete = async (post) => {
      console.log("handle delete");

      try {
         const answer = window.confirm("Are you sure?");
         console.log(post);
         if (!answer) return;
         const data = await axios.delete(`/post/deletepost/${post._id}`);
         toast.error("Post deleted.");
         newsFeed();
      } catch (error) {
         console.log(error);
      }
   };

   const handleFollow = async (user) => {
      console.log("add user to following: ", user);

      try {
         const { data } = await axios.put("/auth/userfollow", {
            _id: user._id,
         });
         // console.log("data for put user follow: ", data);

         let auth = JSON.parse(localStorage.getItem("auth"));
         auth.user = data;
         localStorage.setItem("auth", JSON.stringify(auth));
         setState({ ...state, user: data });
         let filtered = people.filter((p) => p._id !== user._id);
         setPeople(filtered);
         newsFeed();
         toast.success(`Following ${user.name}.`);
      } catch (error) {
         console.log(error);
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
                  <PostForm
                     content={content}
                     setContent={setContent}
                     postSubmit={postSubmit}
                     handleImage={handleImage}
                     uploading={uploading}
                     image={image}
                  />
                  <br />
                  <h3 className="text-center mb-3 text-warning">
                     Total posts (following): {posts.length}
                  </h3>
                  <PostList posts={posts} handleDelete={handleDelete} />
               </div>

               {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}

               <div className="col-md-4">
                  <People people={people} handleFollow={handleFollow} />
               </div>
            </div>
         </div>
      </UserRoute>
   );
};

export default Dashboard;
