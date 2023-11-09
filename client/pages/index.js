import { UserContext } from "../context";
import { useContext } from "react";

const Home = () => {
   const [state, setState] = useContext(UserContext);

   return (
      <div className="container">
         <div className="row">
            <div className="col">
               <h1 className="display-1 text-center">Home Page</h1>
               {JSON.stringify(state)}
               <img src="/images/default.jpg" alt="pedestrian crossing"></img>
            </div>
         </div>
      </div>
   );
};

export default Home;
