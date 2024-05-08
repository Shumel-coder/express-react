import React from "react";
import CreateComment from "./CommentForm";
import Post from "./Post";

function Comment(props) {
  return (
    <div>
      <p>{props.comment}</p>
      <h5> - {props.commentor}</h5>
    </div>
  );
}

export default Comment;
