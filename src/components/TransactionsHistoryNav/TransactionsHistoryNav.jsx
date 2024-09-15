import React from "react";
import css from "./TransactionsHistoryNav.module.css";
import { NavLink } from "react-router-dom";

function TransactionsHistoryNav() {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink to="/expense">
          <button>All Expense</button>
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/income">
          <button>All Income</button>
        </NavLink>
      </li>
    </ul>
  );
}

export default TransactionsHistoryNav;
