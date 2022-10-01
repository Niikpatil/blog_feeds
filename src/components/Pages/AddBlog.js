import React, { useState } from "react";

const AddBlog = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title cannot be blank");
    } else if (!content) {
      alert("Content cannot be blank");
    } else {
      addBlog(title, content);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="col-6 offset-3 mt-4 ">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="title"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="title"
            className="form-control"
            placeholder="Hope this title grab readers attention"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Article
          </label>
          <textarea
            type="text"
            name="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            id="title"
            className="form-control"
            placeholder="Please write Something that fascinate the readers mind..."
          />
        </div>
        <button type="submit" className="btn btn-sm btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
