import React, { useEffect, useState } from "react";
import Link from "next/link";
import { UserContext } from "../context";
import { useContext } from "react";
import Avatar from "antd";

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
            {/* <Avatar src="/images/logo.jpg" /> */}
            My Social Network
         </Link>

         {state !== null ? (
            <>
               <div className="dropdown">
                  <a
                     className="btn dropdown-toggle text-light"
                     role="button"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                  >
                     {state && state.user && state.user.name}
                  </a>
                  <ul className="dropdown-menu">
                     <li>
                        <Link
                           href="/user/dashboard"
                           className={`nav-link dropdown-item ${
                              currentPath === "/user/dashboard" && "active"
                           }`}
                        >
                           Dashboard
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/user/profile/update"
                           className={`nav-link dropdown-item ${
                              currentPath === "/user/profile/update" && "active"
                           }`}
                        >
                           Profile
                        </Link>
                     </li>
                     <li>
                        <Link href="/" className="nav-link" onClick={logout}>
                           Logout
                        </Link>
                     </li>
                  </ul>
               </div>
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
