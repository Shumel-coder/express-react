import React from "react";
import Comment from "./Comment";

function CommentFeed(props) {
  let comments = props.comments.map((data) => {
    return (
      <div>
        <Comment commentor={data.commentor} comment={data.comment} />
      </div>
    );
  });

  return <div>{comments}</div>;
}
export default CommentFeed;
