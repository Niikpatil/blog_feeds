import React from "react";

const Blogs = ({ content }) => {
  return (
    <div>
      <h3>asf</h3>
      {content.map((e) => e.title)}
    </div>
  );
};

export default Blogs;
