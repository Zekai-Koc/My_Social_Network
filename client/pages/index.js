import { UserContext } from "../context";
import { useContext } from "react";
import ParallaxBG from "../components/cards/ParallaxBG";

const Home = () => {
   const [state, setState] = useContext(UserContext);

   return (
      <>
         <ParallaxBG url="/images/default.jpg">My Social Network</ParallaxBG>
      </>
   );
};

export default Home;

// return (
//    <div className="container-fluid">
//       <div className="row">
//          <div className="col">
//             <h1 className="display-1 text-center">My Social Network</h1>
//             {/* {JSON.stringify(state)} */}
//             {/* <img src="/images/default.jpg" alt="pedestrian crossing"></img> */}
//          </div>
//       </div>
//    </div>
// );
// };
