import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "fixed",
    bottom: "0",
    marginTop: "10px",
    width: "100%",
    padding: "0.5%",
  };

  return (
    <footer className="bg-secondary text-light " style={footerStyle}>
      <span className="">Made by NiK</span>
    </footer>
  );
};

export default Footer;
