import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left">
        Pharmacy Management System
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/signin">Signin</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/profile">User List</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
