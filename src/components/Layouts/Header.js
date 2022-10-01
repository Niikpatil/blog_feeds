import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-secondary bg-light shadow-sm">
      <div class="container-fluid">
        <nav class="navbar navbar-light ">
          <Link to="/" class="navbar-brand ">
            OPEN BLOG
          </Link>
        </nav>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/addblog" class="nav-link">
                Blog Write
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
