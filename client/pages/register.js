import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm.js";
import { UserContext } from "../context";
import { useContext } from "react";
import { useRouter } from "next/router";

const Register = () => {
   const [name, setName] = useState("zekai");
   const [email, setEmail] = useState("zekai@test.io");
   const [password, setPassword] = useState("12345");
   const [secret, setSecret] = useState("TEST");
   const [ok, setOk] = useState(false);
   const [loading, setLoading] = useState(false);
   const [state] = useContext(UserContext);

   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         setLoading(true);
         const { data } = await axios.post(`/auth/register`, {
            name,
            email,
            password,
            secret,
         });

         console.log("data", data);

         if (data.error) {
            toast.error(data.error);
            setLoading(false);
         } else {
            setName("");
            setEmail("");
            setPassword("");
            setSecret("");
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

   if (state && state.token) router.push("/");

   return (
      <div className="container-fluid">
         <div className="row py-5 bg-secondary text-light bg-default-image">
            <div className="col text-center">
               <h1>Register</h1>
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

export default Register;
