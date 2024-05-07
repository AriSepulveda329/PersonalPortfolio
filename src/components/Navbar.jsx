import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="button-logo" id={openLinks ? "close" : "openLogo"}>
        <Link to="/">
          <button>Ari Sepulveda</button>
        </Link>
      </div>
      <div className="navbar-links" id={openLinks ? "openLinks" : "close"}>
        <Link to="/" data-replace="Home">
          <span>Home</span>
        </Link>
        <Link to="/about" data-replace="About">
          <span>About</span>
        </Link>
        <Link to="/portfolio" data-replace="Portfolio">
          <span>Portfolio</span>
        </Link>
        <Link to="/contact" data-replace="Contact">
          <span>Contact</span>
        </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
