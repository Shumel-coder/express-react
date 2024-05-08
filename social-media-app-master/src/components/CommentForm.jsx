import React, { useState } from "react";

function CreateComment(props) {
  const [commentor, setCommentor] = useState("");
  const [comment, setComment] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(commentor, comment);

    if (commentor === "" || comment === "") {
      alert("commentor and comment required");
    } else {
      console.log(commentor, comment);
      props.onNewSubmit({ commentor, comment });
    }
  };

  let handleCommentorChange = (event) => {
    setCommentor(event.target.value);
  };

  let handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="commentor">Commentor: </label>
      <input
        type="text"
        className="commentor"
        onChange={handleCommentorChange}
      />
      <br />
      <label htmlFor="comment">Comment: </label>
      <input
        type="textarea"
        className="comment"
        onChange={handleCommentChange}
      />
      <br />
      <br />
      <input
        id="commentbutton"
        type="submit"
        value="Comment"
        disabled={commentor === "" || comment === ""}
      />
    </form>
  );
}
export default CreateComment;
