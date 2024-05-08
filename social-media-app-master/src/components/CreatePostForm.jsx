import React, { useState } from "react";

function CreatePost(props) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(author, content);

    if (author === "" || content === "") {
      alert("Author and content required");
    } else {
      console.log(author, content);
      props.onNewSubmit({ author, content });
    }
  };

  let handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  let handleContentChange = (event) => {
    setContent(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="postAuthor">Author: </label>
      <input type="text" className="author" onChange={handleAuthorChange} />
      <br />
      <label htmlFor="content">Content: </label>
      <input
        type="textarea"
        className="content"
        onChange={handleContentChange}
      />
      <br />
      <br />
      <input
        id="postbutton"
        type="submit"
        value="Post"
        disabled={author === "" || content === ""}
      />
    </form>
  );
}

export default CreatePost;
