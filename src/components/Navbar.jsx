"use client";

import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import "@/styles/Navbar.css";
import Link from "next/link";
import { rubik } from "@/ui/fonts";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar w-full min-h-20 flex bg-green-300 flex-row items-center justify-center">
      <div className="button-logo" id={openLinks ? "close" : "openLogo"}>
        <Link href="/">
          <p className={`${rubik.className} font-bold text-2xl`}>
            Ari Sepulveda
          </p>
        </Link>
      </div>
      <div
        className={`${rubik.className} navbar-links text-lg font-medium`}
        id={openLinks ? "openLinks" : "close"}
      >
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
