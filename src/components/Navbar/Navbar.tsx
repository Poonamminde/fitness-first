import React from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { IoIosBody } from "react-icons/io";
import { useState } from "react";
import Login from "../Auth/Auth";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLogedIN] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const handleClick = () => {
    setIsLogedIN(true);
    setShowPopup(true);
  };
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
      {isLoggedIn ? (
        <div className="sign-up nav-items">Logout</div>
      ) : (
        <div className="sign-up nav-items" onClick={handleClick}>
          Login
        </div>
      )}
      {showPopup && <Login />}
    </nav>
  );
};

export default Navbar;
