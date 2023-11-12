import React, { useContext } from "react";
// import { Avatar } from "antd/es/avatar/avatar";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { Avatar, List } from "antd";

const People = ({ people }) => {
   const [state] = useContext(UserContext);
   const router = useRouter();

   const imageSource = (user) => {
      if (user.image) return user.image.url;
      else return "/images/logo.jpg";
      user.image.url;
   };

   return (
      <>
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
                           <span className="text-primary">Follow</span>
                        </div>
                     }
                  />
               </List.Item>
            )}
         />
      </>
   );
};

export default People;