import React from "react";
import { BlogList } from "./BlogList";

const Blogs = ({ article, onDelete }) => {
  return (
    <>
      <h2>Articals for Readers</h2>
      {article.length === 0 ? (
        <h3>No Content to display</h3>
      ) : (
        article.map((articleList) => (
          <BlogList
            articleList={articleList}
            key={articleList.id}
            onDelete={onDelete}
          />
        ))
      )}
    </>
  );
};

export default Blogs;
