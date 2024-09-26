import React from "react";
import css from "./MobileTransactionNav.module.css";
import { NavLink } from "react-router-dom";

function MobileTransactionNav({setOpen, open}) {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink to="/expense">
          <button onClick={() => setOpen(!open)}>All Expense</button>
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/income">
          <button onClick={() => setOpen(!open)}>All Income</button>
        </NavLink>
      </li>
    </ul>
  );
}

export default MobileTransactionNav;
