import React from "react";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-secondary bg-light shadow-sm">
      <div class="container-fluid"> 
        <nav class="navbar navbar-light ">
          <a class="navbar-brand " href="/">
            OPEN BLOG
          </a>
        </nav>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/addblog">
                Blog Write
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
