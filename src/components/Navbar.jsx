"use client";

import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";
import Link from "next/link";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="button-logo" id={openLinks ? "close" : "openLogo"}>
        <Link href="/">
          <button>Ari Sepulveda</button>
        </Link>
      </div>
      <div className="navbar-links" id={openLinks ? "openLinks" : "close"}>
        <Link href="/" data-replace="Home">
          <span>Home</span>
        </Link>
        <Link href="/about" data-replace="About">
          <span>About</span>
        </Link>
        <Link href="/portfolio" data-replace="Portfolio">
          <span>Portfolio</span>
        </Link>
        <Link href="/contact" data-replace="Contact">
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
