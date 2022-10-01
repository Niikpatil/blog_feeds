import React from "react";
import { BlogList } from "./BlogList";

const Blogs = ({ article, onDelete }) => {
  const ColoredLine = () => (
    <hr
      style={{
        backgroundColor: "blue",
        height: 3,
        width: "80%",
      }}
    />
  );

  return (
    <>
      <div className="justify-content-center ">
        <h4>Articals for Readers</h4>
        <ColoredLine />
      </div>

      {article.length === 0 ? (
        <h4>No Content to display</h4>
      ) : (
        article.map((articleList) => (
          <div
            className="my-6 d-flex flex-column justify-content-center     "
            key={articleList.id}
          >
            <BlogList articleList={articleList} onDelete={onDelete} />
          </div>
        ))
      )}
    </>
  );
};

export default Blogs;
