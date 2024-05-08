import React from "react";
import Post from "./Post";

function Feed(props) {
  let posts = props.posts.map((data) => {
    return (
      <div>
        <Post author={data.author} content={data.content} />
      </div>
    );
  });

  return <div>{posts}</div>;
}
export default Feed;
