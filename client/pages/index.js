import { UserContext } from "../context";
import { useContext, useEffect } from "react";
import ParallaxBG from "../components/cards/ParallaxBG";
import axios from "axios";
import PostPublic from "../components/cards/Post";
import Head from "next/head";
import Link from "next/link";
import io from "socket.io-client";

const socket = io("http://localhost:8000", {
   reconnection: true,
});

const Home = ({ posts }) => {
   const [state, setState] = useContext(UserContext);

   useEffect(() => {
      console.log("SOCKET IO ON JOIN", socket);
   }, []);

   const head = () => {
      <Head>
         <title>MSN - My Social Network...</title>
         <meta name="description" content="and so i made up my mind..." />
         <meta
            property="og:description"
            content="and so i made up my mind..."
         />
         <meta property="og:type" content="website..." />
         <meta property="og:site_name" content="MSN" />
         <meta property="og:url" content="http://msn.com" />
         <meta
            property="og:image:secure_url"
            content="http://msn.com/images/default.jpg"
         />
      </Head>;
   };

   return (
      <>
         {head()}
         <ParallaxBG url="/images/default.jpg" />

         <div className="container">
            <div className="row pt-5">
               {posts.map((post) => (
                  <div className="col-md-4" key={post._id}>
                     <Link href={`/post/view/${post._id}`}>
                        <PostPublic key={post._id} post={post} />
                     </Link>{" "}
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export async function getServerSideProps() {
   const { data } = await axios.get("/post/posts");
   // console.log(data);

   return {
      props: {
         posts: data,
      },
   };
}

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
