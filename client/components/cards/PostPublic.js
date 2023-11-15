import React, { useContext } from "react";
import renderHTML from "react-render-html";
import moment from "moment";
import { Avatar } from "antd";
import PostImage from "../images/PostImage";
import {
   HeartOutlined,
   HeartFilled,
   CommentOutlined,
   EditOutlined,
   DeleteOutlined,
} from "@ant-design/icons";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import { imageSource } from "../../functions";
import Link from "next/link";

const PostPublic = ({
   post,
   handleDelete,
   handleLike,
   handleUnlike,
   handleComment,
   commentsCount = 10,
   removeComment,
}) => {
   const [state] = useContext(UserContext);

   const router = useRouter();

   return (
      <>
         {post && post.postedBy && (
            <div key={post._id} className="card mb-5">
               <div className="card-header">
                  <Avatar size={40} src={imageSource(post.postedBy)} />
                  <span className="pt-2 ml-3" style={{ marginLeft: "0.5rem" }}>
                     {post &&
                        post.postedBy &&
                        post.postedBy.name &&
                        post.postedBy.name}
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

                  <div className="d-flex">
                     {state &&
                     state.user &&
                     post.likes &&
                     post.likes.includes(state.user._id) ? (
                        <HeartFilled className="text-danger pt-2 h5" />
                     ) : (
                        <HeartOutlined className="text-danger pt-2 h5" />
                     )}

                     <div
                        className="pt-2 pl-3"
                        style={{ marginLeft: "0.7rem" }}
                     >
                        {post.likes.length > 0 ? (
                           <span>{post.likes.length} like(s)</span>
                        ) : (
                           <span>No likes</span>
                        )}{" "}
                     </div>

                     <CommentOutlined
                        className="text-danger pt-2 h5"
                        style={{ marginLeft: "2rem" }}
                     />
                     <div
                        className="pt-2 pl-3"
                        style={{ marginLeft: "0.7rem" }}
                     >
                        {post.comments.length} comment(s).
                     </div>
                  </div>
               </div>

               {post.comments && post.comments.length > 0 && (
                  <ol
                     className="list-group"
                     style={{ maxHeight: "125px", overflow: "scroll" }}
                  >
                     {post.comments.slice(0, commentsCount).map((c) => (
                        <li
                           key={c._id}
                           className="list-group-item d-flex justify-content-between align-item-start"
                        >
                           <div className="ms-6 me-auto">
                              <div>
                                 <Avatar
                                    size={25}
                                    className="mb-1 mr-3"
                                    src={imageSource(c.postedBy)}
                                 />
                                 {c.postedBy.name}
                              </div>
                              <div>{c.text}</div>
                           </div>
                           <span className="badge rounded-pill text-muted">
                              {moment(c.created).fromNow()}
                           </span>
                        </li>
                     ))}
                  </ol>
               )}
            </div>
         )}
      </>
   );
};

export default PostPublic;
