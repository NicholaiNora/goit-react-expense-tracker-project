import React from "react";
import css from "./TransactionsHistoryNav.module.css"

function TransactionsHistoryNav() {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <button>All Expense</button>
      </li>
      <li className={css.item}>
        <button>All Income</button>
      </li>
    </ul>
  );
}

export default TransactionsHistoryNav;
