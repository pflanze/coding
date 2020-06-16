import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header style={headerStyle}>
      {/*  Logo  */}
      <img src="./images/insta-logo.png" alt="logo" />

      {/*  Search Bar  */}
      <form>
        <input
          type="text"
          name="search"
          className="searchBar"
          placeholder="Search"
        />
      </form>

      {/*  Icons */}
      <div className="nav-icons">
        <FontAwesomeIcon icon="home" className="icon" />
        <FontAwesomeIcon icon="paper-plane" className="icon" />
        <FontAwesomeIcon icon="compass" className="icon" />
        <FontAwesomeIcon icon="heart" className="icon" />
        <img src="./images/avatar-nav.png" alt="avatar-nav" className="icon" />
      </div>
    </header>
  );
}

// Style
const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  borderBottom: "1px solid #dddddd",
};

export default Header;
