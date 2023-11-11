import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Avatar } from "antd";
import Link from "next/link";
import AuthForm from "../../../components/forms/AuthForm.js";
import { UserContext } from "../../../context";
import { useContext } from "react";
import { useRouter } from "next/router";
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";

const ProfileUpdate = () => {
   const [username, setUsername] = useState("");
   const [about, setAbout] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [secret, setSecret] = useState("");
   const [ok, setOk] = useState(false);
   const [loading, setLoading] = useState(false);
   const [image, setImage] = useState({});
   const [uploading, setUploading] = useState(false);

   const [state, setState] = useContext(UserContext);
   const router = useRouter();

   useEffect(() => {
      // console.log("user from stae: ", state.user);
      setUsername(state.user.username);
      setAbout(state.user.about);
      setName(state.user.name);
      setEmail(state.user.email);
      setImage(state.user.image);
      // setSecret(state.user.state);
   }, [state && state.user]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         setLoading(true);
         const { data } = await axios.put(`/auth/profileupdate`, {
            username,
            about,
            name,
            email,
            password,
            secret,
            image,
         });

         console.log("data", data);

         if (data.error) {
            toast.error(data.error);
            setLoading(false);
         } else {
            let auth = JSON.parse(localStorage.getItem("auth"));
            auth.user = data;
            localStorage.setItem("auth", JSON.stringify(auth));
            setState({ ...state, user: data });
            setOk(true);
            setLoading(false);
         }
      } catch (err) {
         console.log(err);
         // toast.error(err.response.data);
         // toast.error("err");
         setLoading(false);
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
      <div className="container-fluid">
         <div className="row py-5 bg-secondary text-light bg-default-image">
            <div className="col text-center">
               <h1>Profile</h1>
            </div>
         </div>
         {/* {loading ? <h1>Loading</h1> : ""} */}
         <div className="row py-5">
            <div className="col-md-6 offset-md-3">
               <label className="d-flex justify-content-center h5">
                  {image && image.url ? (
                     <Avatar size={30} src={image.url} className="mt-1" />
                  ) : uploading ? (
                     <LoadingOutlined className="nt-2" />
                  ) : (
                     <CameraOutlined className="nt-2" />
                  )}

                  <input
                     onChange={handleImage}
                     type="file"
                     accept="images/*"
                     hidden
                  />
               </label>

               <AuthForm
                  handleSubmit={handleSubmit}
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  secret={secret}
                  setSecret={setSecret}
                  loading={loading}
                  username={username}
                  about={about}
                  setUsername={setUsername}
                  setAbout={setAbout}
                  profileUpdate={true}
               />
            </div>
         </div>

         <div className="row">
            <div className="col">
               <Modal
                  open={ok}
                  title="Congratulations."
                  onCancel={() => setOk(false)}
                  footer={null}
               >
                  <p>You have successully updated your profile.</p>
               </Modal>
            </div>
         </div>

         {/* <div className="row">
            <div className="col">
               <p className="text-center">
                  Already registered? <Link href="/login">Login</Link>
               </p>
            </div>
         </div> */}
      </div>
   );
};

export default ProfileUpdate;
