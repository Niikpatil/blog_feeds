import React from "react";
import { BlogList } from "./BlogList";

const Blogs = ({ article, onDelete }) => {
  return (
    <div>
      <h1>Articals for Readers</h1>
      {article.length === 0 ? (
        <h3>No Content to display</h3>
      ) : (
        article.map((articleList) => (
          <BlogList
            articleList={articleList}
            onDelete={onDelete}
            key={articleList.id}
          />
        ))
      )}
    </div>
  );
};

export default Blogs;
