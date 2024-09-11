import React from "react";
import { ReactComponent as IconLogo } from "../images/logo.svg";
import css from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
        <Link to="/" className={css.logoContainer}>
          <IconLogo />
          <span>ExpenseTracker</span>
        </Link>
    </div>
  );
}

export default Logo;
