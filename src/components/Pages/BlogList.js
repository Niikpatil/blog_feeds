import React from "react";

export const BlogList = ({ articleList, onDelete }) => {
  return (
    <div className="container my-4">
      <div className="card rounded-3 shadow-lg">
        <h6 className="d-flex justify-content-between card-header">
          {articleList.title}
          <div>
            <button
              type="button"
              className="btn btn-close btn-sm
        "
              aria-label="Close"
              onClick={() => onDelete(articleList)}
            ></button>
          </div>
        </h6>
        <div className="card-body text-center">
          <p className="card-text">{articleList.content}</p>
        </div>
      </div>
    </div>
  );
};
