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

const Post = ({
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
                  {/* <Avatar size={40}>
                           {post &&
                              post.postedBy &&
                              post.postedBy.name &&
                              post.postedBy.name[0]}
                        </Avatar> */}
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
                        <HeartFilled
                           onClick={() => handleUnlike(post._id)}
                           className="text-danger pt-2 h5"
                        />
                     ) : (
                        <HeartOutlined
                           onClick={() => handleLike(post._id)}
                           className="text-danger pt-2 h5"
                        />
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
                        onClick={() => handleComment(post)}
                        className="text-danger pt-2 h5"
                        style={{ marginLeft: "2rem" }}
                     />
                     <div
                        className="pt-2 pl-3"
                        style={{ marginLeft: "0.7rem" }}
                     >
                        <Link href={`/post/${post._id}`}>
                           {post.comments.length} comment(s).
                        </Link>
                     </div>

                     {state &&
                        state.user &&
                        state.user._id === post.postedBy._id && (
                           <>
                              <EditOutlined
                                 onClick={() =>
                                    router.push(`/user/post/${post._id}`)
                                 }
                                 className="text-danger pt-2 h5 mx-auto"
                                 style={{ marginLeft: "2rem" }}
                              />
                              <DeleteOutlined
                                 onClick={() => handleDelete(post)}
                                 className="text-danger pt-2 h5"
                                 style={{ marginLeft: "2rem" }}
                              />
                           </>
                        )}
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
                              {state &&
                                 state.user &&
                                 state.user._id === c.postedBy._id && (
                                    <div className="ml-auto mt-1">
                                       <DeleteOutlined
                                          onClick={() =>
                                             removeComment(post._id, c)
                                          }
                                          className="pl-2 text-danger"
                                       />
                                    </div>
                                 )}
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

export default Post;
