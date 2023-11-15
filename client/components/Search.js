import React, { useState, useContext } from "react";
import { UserContext } from "../context";
import axios from "axios";
import People from "./cards/People";

const Search = () => {
   const [state] = useContext(UserContext);

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

   return (
      <>
         <form className="form-inline row" onSubmit={searchUser}>
            <div className="col-8">
               {" "}
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
         {result && result.map((r) => <People key={r._id} people={result} />)}
      </>
   );
};

export default Search;
