import React from "react";
import classes from "./Navbar.module.scss";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.Container}>
        <h1>To-Do App</h1>
        <ul className={classes.NavList}>
          <li>
            <span>All</span>
          </li>
          <li>
            <span>Completed</span>
          </li>
          <li>
            <span>Pending</span>
          </li>
        </ul>
        <div className={classes.Profile}>
          <CgProfile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
