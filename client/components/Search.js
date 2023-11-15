import React, { useState, useContext } from "react";
import { UserContext } from "../context";
import axios from "axios";

const Search = () => {
   const [state] = useContext(UserContext);

   const [query, setQuery] = useState("");

   const searchUser = async (e) => {
      e.preventDefault();
      // console.log(`find ${query} from db.`);

      try {
         const { data } = await axios.get(`/post/searchuser/${query}`);
         console.log("search user result: ", data);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <form className="form-inline row" onSubmit={searchUser}>
            <div className="col-8">
               {" "}
               <input
                  onChange={(e) => setQuery(e.target.value)}
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
      </>
   );
};

export default Search;
