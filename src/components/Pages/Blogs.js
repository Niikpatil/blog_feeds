import React from "react";
import { BlogList } from "./BlogList";

const Blogs = ({ article, onDelete }) => {
  const ColoredLine = () => (
    <hr
      style={{
        backgroundColor: "blue",
        height: 3,
        width: "100%",
      }}
    />
  );

  return (
    <>
      <h4 className="text-center">Articals for Readers</h4>
      <ColoredLine />

      {article.length === 0 ? (
        <h4>No Content to display</h4>
      ) : (
        article.map((articleList) => (
          <BlogList
            articleList={articleList}
            onDelete={onDelete}
            key={articleList.id}
          />
        ))
      )}
    </>
  );
};

export default Blogs;
