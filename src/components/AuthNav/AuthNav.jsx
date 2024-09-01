import React from "react";
import { NavLink } from 'react-router-dom';
import css from "./AuthNav.module.css";
function AuthNav() {
  return (
    <div className={css.authNavContainer}>
      <NavLink to="/register">
        <button className={css.authNavBtn}>Sign Up</button>
      </NavLink>
      <NavLink to="/login">
        <button className={css.authNavBtn}>Sign In</button>
      </NavLink>
    </div>
  );
}

export default AuthNav;
