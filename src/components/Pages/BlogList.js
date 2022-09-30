import React from "react";

export const BlogList = ({ articleList, onDelete }) => {
  return (
    <>
      <ul>
        <li>{articleList.id}</li>
        <li>{articleList.title}</li>
        <li>{articleList.content}</li>
        <button onClick={() => onDelete(articleList)}>Delete</button>
      </ul>
    </>
  );
};
