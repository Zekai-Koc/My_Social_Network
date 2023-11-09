import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const UserContext = createContext();

const UserProvider = ({ children }) => {
   // const [state, setState] = useState([{ user: {}, token: "" }]);
   const [state, setState] = useState(null);
   const router = useRouter();

   useEffect(() => {
      setState(JSON.parse(localStorage.getItem("auth")));
      console.log("dashboard state:", state);
   }, []);

   // SET AXIOS CONFIGURATION
   const token = state && state.token ? state.token : "";
   axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   // console.log(
   //    "axios.defaults.headers.common['Authorization']: ",
   //    axios.defaults.headers.common["Authorization"]
   // );
   // console.log("axios.defaults.baseURL: ", axios.defaults.baseURL);

   // Add a request interceptor
   axios.interceptors.response.use(
      function (response) {
         return response;
      },
      function (error) {
         let res = error.response;
         if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
            setState(null);
            window.localStorage.removeItem("auth");
            router.push("/login");
         }
      }
   );

   return (
      <UserContext.Provider value={[state, setState]}>
         {children}
      </UserContext.Provider>
   );
};

export { UserContext, UserProvider };
