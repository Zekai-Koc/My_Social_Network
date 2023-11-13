import React, { useContext, useEffect, useState } from "react";
// import { Avatar } from "antd/es/avatar/avatar";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { Avatar, List } from "antd";
import axios from "axios";
import { RollbackOutlined } from "@ant-design/icons";
import Link from "next/link";

const Following = () => {
   const [people, setPeople] = useState([]);

   const [state, setState] = useContext(UserContext);
   const router = useRouter();

   useEffect(() => {
      if (state && state.token) fetchFollowing();
   }, [state && state.token]);

   const fetchFollowing = async () => {
      try {
         const { data } = await axios.get("/auth/userfollowing");
         console.log(data);
         setPeople(data);
      } catch (error) {
         console.log(error);
      }
   };

   const imageSource = (user) => {
      if (user.image) return user.image.url;
      else return "/images/logo.jpg";
      user.image.url;
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
         let filtered = people.filter((p) => p._id !== user._id);
         setPeople(filtered);
         toast.error(`Unfollowed ${user.name}.`);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="row col-md-6 offset-md-3">
         <List
            itemLayout="horizontal"
            dataSource={people}
            renderItem={(user) => (
               <List.Item>
                  <List.Item.Meta
                     avatar={<Avatar src={imageSource(user)} />}
                     title={
                        <div className="d-flex justify-content-between">
                           {user.username}{" "}
                           <span
                              onClick={() => handleUnfollow(user)}
                              className="text-primary pointer"
                              style={{ border: "1px solid red" }}
                           >
                              Unfollow
                           </span>
                        </div>
                     }
                  />
               </List.Item>
            )}
         />

         <Link
            href="/user/dashboard"
            className="d-flex justify-content-center pt-5"
         >
            <RollbackOutlined />
         </Link>
      </div>
   );
};

export default Following;
