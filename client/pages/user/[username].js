import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { Avatar, Card } from "antd";
import axios from "axios";
import { RollbackOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Meta } = Card;

const Username = () => {
   const [user, setUser] = useState({});

   const [state, setState] = useContext(UserContext);
   const router = useRouter();

   useEffect(() => {
      if (router.query.username) fetchUser();
   }, [router.query.username]);

   const fetchUser = async () => {
      try {
         const { data } = await axios.get(
            `/auth/user/${router.query.username}`
         );
         // console.log("router.query.username ", data);
         setUser(data);
      } catch (error) {
         console.log(error);
      }
   };

   const imageSource = (user) => {
      if (user.image) return user.image.url;
      else return "/images/logo.jpg";
   };

   return (
      <div className="row col-md-6 offset-md-3">
         {/* <per>{JSON.stringify(user, null, 4)}</per> */}

         <div className="pt-5 pb-5">
            <Card
               hoverable
               cover={<img src={imageSource(user)} alt={user.name} />}
            >
               <Meta title={user.name} description={user.about} />

               <p className="pt-2 text-muted">
                  Joined {moment(user.createdAt).fromNow()}
               </p>

               <div className="d-flex justify-content-between">
                  <span className="btn btn-sm">
                     {user.followers && user.followers.length} Followers
                  </span>
                  <span className="btn btn-sm">
                     {user.following && user.following.length} Following
                  </span>
               </div>
            </Card>

            <Link
               href="/user/dashboard"
               className="d-flex justify-content-center pt-5"
            >
               <RollbackOutlined />
            </Link>
         </div>
      </div>
   );
};

export default Username;
