import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm.js";
import { useRouter } from "next/router";
import { UserContext } from "../context";
import { useContext } from "react";

const Login = () => {
   const [email, setEmail] = useState("zekai@test.io");
   const [password, setPassword] = useState("12345");
   const [loading, setLoading] = useState(false);

   const [state, setState] = useContext(UserContext);

   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         setLoading(true);
         const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API}/auth/login`,
            {
               email,
               password,
            }
         );

         console.log("incoming data in login:", data);
         // console.log("incoming data in login:", data.data);

         if (data.error) {
            toast.error(data.error);
            setLoading(false);
         } else {
            setState({
               user: data.user,
               token: data.token,
            });
            localStorage.setItem("auth", JSON.stringify(data));
            router.push("/");
         }

         // console.log(data);
      } catch (err) {
         // toast.error(err.response.data, {
         //    // position: "top-right",
         //    autoClose: 1000,
         //    // hideProgressBar: false,
         //    // closeOnClick: true,
         //    // pauseOnHover: true,
         //    // draggable: true,
         //    // progress: undefined,
         //    // theme: "light",
         // });
         console.log(err);
         setLoading(false);
      }
   };

   if (state && state.token) router.push("/");

   return (
      <div className="container-fluid">
         <div className="row py-5 bg-secondary text-light bg-default-image">
            <div className="col text-center">
               <h1>Login</h1>
            </div>
         </div>
         {/* {loading ? <h1>Loading</h1> : ""} */}
         <div className="row py-5">
            <div className="col-md-6 offset-md-3">
               <AuthForm
                  handleSubmit={handleSubmit}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  loading={loading}
                  page="Login"
               />
            </div>
         </div>

         <div className="row">
            <div className="col">
               <p className="text-center">
                  Not yet registered? <Link href="/register">Register</Link>
               </p>
            </div>
         </div>

         <div className="row">
            <div className="col">
               <p className="text-center">
                  Forgot Password?{" "}
                  <Link href="/resetPassword" className="btn btn-warning">
                     Reset Password
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Login;
