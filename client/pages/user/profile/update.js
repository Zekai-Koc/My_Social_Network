import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import AuthForm from "../../../components/forms/AuthForm.js";
import { UserContext } from "../../../context";
import { useContext } from "react";
import { useRouter } from "next/router";

const ProfileUpdate = () => {
   const [username, setUsername] = useState("");
   const [about, setAbout] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [secret, setSecret] = useState("");
   const [ok, setOk] = useState(false);
   const [loading, setLoading] = useState(false);

   const [state] = useContext(UserContext);
   const router = useRouter();

   useEffect(() => {
      // console.log("user from stae: ", state.user);
      setUsername(state.user.username);
      setAbout(state.user.about);
      setName(state.user.name);
      setEmail(state.user.email);
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
         });

         // console.log("data", data);

         if (data.error) {
            toast.error(data.error);
            setLoading(false);
         } else {
            setOk(data.ok);
            setLoading(false);
         }
      } catch (err) {
         console.log(err);
         // toast.error(err.response.data);
         // toast.error("err");
         setLoading(false);
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
                  <p>You have successully registered.</p>
                  <Link href="/login">Login</Link>
               </Modal>
            </div>
         </div>

         <div className="row">
            <div className="col">
               <p className="text-center">
                  Already registered? <Link href="/login">Login</Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default ProfileUpdate;
