import React from "react";
import css from "./AuthNav.module.css";
function AuthNav() {
  return (
    <div className={css.authNavContainer}>
      <button className={css.authNavBtn}>Sign Up</button>
      <button className={css.authNavBtn}>Sign In</button>
    </div>
  );
}

export default AuthNav;
