import React from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { IoIosBody } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <Logo />
      <Link href="/" className="nav-items">
        HOME
      </Link>
      <Link href="/contact" className="nav-items">
        CONTACT
      </Link>
      <IoIosBody className="nav-items body-icon" />
      <div className="sign-up nav-items">SIGN UP</div>
    </nav>
  );
};

export default Navbar;
