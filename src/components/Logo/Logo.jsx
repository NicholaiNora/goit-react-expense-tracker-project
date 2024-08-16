import React from "react";
import { ReactComponent as IconLogo } from "../images/logo.svg";
import css from "./Logo.module.css"

function Logo() {
  return (
    <div className={css.logoContainer}>
      <IconLogo />
      <span>ExpenseTracker</span>
    </div>
  );
}

export default Logo;
