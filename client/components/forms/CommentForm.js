import React from "react";

const CommentForm = ({ comment, addComment, setComment }) => {
   return (
      <form onSubmit={(e) => addComment(e)}>
         <input
            type="text"
            className="form-control"
            placeholder="Write your comment."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
         />
         <button className="btn btn-primary btn-sm btn-block mt-3">
            Submit
         </button>
      </form>
   );
};

export default CommentForm;
