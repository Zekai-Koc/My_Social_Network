import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm.js";
import { UserContext } from "../context/index.js";
import { useContext } from "react";
import { useRouter } from "next/router";

const ResetPassword = () => {
   const [email, setEmail] = useState("zekai@test.io");
   const [newPassword, setNewPassword] = useState("12345");
   const [secret, setSecret] = useState("TEST");
   const [ok, setOk] = useState(false);
   const [loading, setLoading] = useState(false);
   const [state] = useContext(UserContext);

   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         setLoading(true);
         const { data } = await axios.post(`/auth/forgotpassword`, {
            email,
            newPassword,
            secret,
         });

         console.log("forgot password response data: ", data);

         if (data.error) {
            toast.error(data.error);
            setLoading(false);
         }

         if (data.success) {
            setEmail("");
            setNewPassword("");
            setSecret("");
            setOk(true);
            setLoading(false);
         }
      } catch (err) {
         console.log(err);
         console.log("err");
         setLoading(false);
      }
   };

   if (state && state.token) router.push("/");

   return (
      <div className="container-fluid">
         <div className="row py-5 bg-secondary text-light bg-default-image">
            <div className="col text-center">
               <h1>Reset Password</h1>
            </div>
         </div>
         {/* {loading ? <h1>Loading</h1> : ""} */}
         <div className="row py-5">
            <div className="col-md-6 offset-md-3">
               <ForgotPasswordForm
                  handleSubmit={handleSubmit}
                  email={email}
                  setEmail={setEmail}
                  newPassword={newPassword}
                  setNewPassword={setNewPassword}
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
                  <p>
                     Congratulations! You can now login with your new password.
                  </p>
                  <Link href="/login">Login</Link>
               </Modal>
            </div>
         </div>
      </div>
   );
};

export default ResetPassword;
