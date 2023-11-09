import React from "react";
import { Avatar } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";

const CreatePostForm = ({
   content,
   setContent,
   postSubmit,
   handleImage,
   uploading,
   image,
}) => {
   return (
      <div className="card">
         <div className="card-body pb-3">
            <form className="form-group">
               <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={(e) => setContent(e)}
                  className="form-control"
                  placeholder="Write your post here..."
               />
            </form>
         </div>

         <div className="card-footer d-flex justify-content-between text-muted">
            <button
               disabled={!content}
               className="btn btn-primary btn-sm mt-1"
               onClick={postSubmit}
            >
               Post
            </button>

            <label>
               {image && image.url ? (
                  <Avatar size={30} src={image.url} className="mt-1" />
               ) : uploading ? (
                  <LoadingOutlined className="nt-2" />
               ) : (
                  <CameraOutlined className="nt-2" />
               )}

               <input
                  onChange={handleImage}
                  type="file"
                  accept="images/*"
                  hidden
               />
            </label>
         </div>
      </div>
   );
};

export default CreatePostForm;
