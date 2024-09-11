import React from "react";
import TransactionsTotalAmount from "../TransactionsTotalAmount/TransactionsTotalAmount";
import TransactionsChart from "../TransactionsChart/TransactionsChart";
import TransactionForm from "../TransactionForm/TransactionForm";
import css from "./MainTransactionsPage.module.css";

function MainTransactionsPage() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.textWrapper}>
          <h2>Expense Log</h2>
          <p>
            Capture and organize every penny spent with ease! A clear view of
            your financial habits at your fingertips.
          </p>
        </div>
        <TransactionsTotalAmount />
        <TransactionsChart />
      </div>
      <TransactionForm />
    </div>
  );
}

export default MainTransactionsPage;
