import React, { useState, useContext } from "react";
import { UserContext } from "../context";
import axios from "axios";
import People from "./cards/People";
import { toast } from "react-toastify";

const Search = () => {
   const [state, setState] = useContext(UserContext);

   const [query, setQuery] = useState("");
   const [result, setResult] = useState([]);

   const searchUser = async (e) => {
      e.preventDefault();
      // console.log(`find ${query} from db.`);

      try {
         const { data } = await axios.get(`/auth/searchuser/${query}`);
         // console.log("search user result: ", data);
         setResult(data);
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
         let filtered = result.filter((p) => p._id !== user._id);
         setResult(filtered);
         toast.success(`Following ${user.name}.`);
      } catch (error) {
         console.log(error);
      }
   };

   const handleUnfollow = async (user) => {
      try {
         const { data } = await axios.put("/auth/userunfollow", {
            _id: user._id,
         });
         console.log(data);

         let auth = JSON.parse(localStorage.getItem("auth"));
         auth.user = data;
         localStorage.setItem("auth", JSON.stringify(auth));
         setState({ ...state, user: data });
         let filtered = result.filter((p) => p._id !== user._id);
         setResult(filtered);
         toast.error(`Unfollowed ${user.name}.`);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <form className="form-inline row" onSubmit={searchUser}>
            <div className="col-8">
               <input
                  onChange={(e) => {
                     setQuery(e.target.value);
                     setResult([]);
                  }}
                  value={query}
                  className="form-control"
                  placeholder="Search"
                  type="search"
               />
            </div>
            <div className="col-4">
               <button className="btn btn-outline-primary col-12" type="submit">
                  Search
               </button>
            </div>
         </form>
         {result &&
            result.map((r) => (
               <People
                  key={r._id}
                  people={result}
                  handleFollow={handleFollow}
                  handleUnfollow={handleUnfollow}
               />
            ))}
      </>
   );
};

export default Search;
