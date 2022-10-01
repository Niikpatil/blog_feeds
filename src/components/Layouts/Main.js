import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-2 p-5 rounded">
        <div className="col-sm-8 mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
