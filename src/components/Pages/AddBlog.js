import React, { useState } from "react";

const AddBlog = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (!title) {
      alert("Title cannot be blank");
    } else if (!content) {
      alert("Content cannot be blank");
    }

    addBlog(title, content);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Hope this title grabe readers attention"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="textarea"
          name="content"
          value={content}
          placeholder="Please write Something that fascinate the readers mind..."
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
