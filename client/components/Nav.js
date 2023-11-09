import React, { useEffect, useState } from "react";
import Link from "next/link";
import { UserContext } from "../context";
import { useContext } from "react";

const Nav = () => {
   const [state, setState] = useContext(UserContext);
   const [currentPath, setSCurrentPath] = useState("");

   useEffect(() => {
      process.browser && setSCurrentPath(window.location.pathname);
   }, [process.browser && window.location.pathname]);

   const logout = () => {
      setState(null);
      localStorage.removeItem("auth");
   };

   return (
      <nav
         className="nav  d-flex justify-content-end"
         style={{ backgroundColor: "blue" }}
      >
         <Link
            href="/"
            className={`nav-link text-light logo ${
               currentPath === "/" && "active"
            }`}
         >
            My Social Network
         </Link>

         {state ? (
            <>
               <Link
                  href="/user/dashboard"
                  className={`nav-link text-light ${
                     currentPath === "/user/dashboard" && "active"
                  }`}
               >
                  {state && state.user && state.user.name}
               </Link>
               <Link href="/" className="nav-link text-light " onClick={logout}>
                  Logout
               </Link>
            </>
         ) : (
            <>
               <Link
                  href="/login"
                  className={`nav-link text-light ${
                     currentPath === "/login" && "active"
                  }`}
               >
                  Login
               </Link>
               <Link
                  href="/register"
                  className={`nav-link text-light ${
                     currentPath === "/register" && "active"
                  }`}
               >
                  Register
               </Link>
            </>
         )}
      </nav>
   );
};

export default Nav;
