import React, { useState } from "react";
import Comment from "./Comment";
import CreatePost from "./CreatePostForm";
import CreateComment from "./CommentForm";
import CommentFeed from "./CommentFeed";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { SvgIcon } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { blue, red } from "@mui/material/colors";

function Post(props) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  let handleNewComment = (data) => {
    setComments([...comments, data]);
  };

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div className="postCard">
      <h2> {props.author} </h2>
      <h4> {props.content} </h4>
      <h5>
        <FavoriteIcon sx={{ color: red[500] }} />
        {likes}{" "}
      </h5>
      <button onClick={handleLike} on>
        <ThumbUpOffAltIcon sx={{ color: blue[500] }} />
      </button>
      <p>Comments:</p>
      <CommentFeed comments={comments} />
      <br />
      <CreateComment onNewSubmit={handleNewComment} />
      <br />
    </div>
  );
}
export default Post;
