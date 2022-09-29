import React from "react";

const Blogs = ({ article, onDelete }) => {
  const msg = "hit delete";

  return (
    <div>
      <h1>Articals for Readers</h1>

      {article.map((e) => (
        <ul key={e.id}>
          <li>{e.id}</li>
          <li>{e.title}</li>
          <li>{e.content}</li>
          <button onClick={() => onDelete(e)}>Delete</button>
        </ul>
      ))}
    </div>
  );
};

export default Blogs;
