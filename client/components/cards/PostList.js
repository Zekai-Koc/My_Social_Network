import React from "react";
import renderHTML from "react-render-html";
import moment from "moment";
import { Avatar } from "antd";
import PostImage from "../images/PostImage";

const PostList = ({ posts }) => {
   return (
      <div>
         {posts &&
            posts.map((post) => {
               return (
                  <div key={post._id} className="card mb-5">
                     <div className="card-header">
                        <Avatar size={40}>{post.postedBy.name[0]}</Avatar>
                        <span
                           className="pt-2 ml-3"
                           style={{ marginLeft: "0.5rem" }}
                        >
                           {post.postedBy.name}
                        </span>
                        <span
                           className="pt-2 ml-10 pl-5"
                           style={{ marginLeft: "1rem" }}
                        >
                           {moment(post.createdAt).fromNow()}
                        </span>
                     </div>

                     <div className="card-body">{renderHTML(post.content)}</div>

                     <div className="card-footer">
                        {post.image && <PostImage url={post.image.url} />}

                        <div className="pt-3">
                           likes/unlikes 3 likes 2 comments...
                        </div>
                     </div>
                  </div>
               );
            })}
      </div>
   );
};

export default PostList;

{
   /* <img src={post.image && post.image.url} alt={post.postedBy.name[0]} />; */
}
