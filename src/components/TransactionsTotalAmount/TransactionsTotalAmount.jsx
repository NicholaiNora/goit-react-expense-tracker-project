import React from "react";
import css from "./TransactionsTotalAmount.module.css";
import arrow from "../images/arrow.svg";
import { useSelector } from "react-redux";
import { getExpenses, getIncomes } from "../../redux/selectors";

function TransactionsTotalAmount() {
  const expenses = useSelector(getExpenses);
  console.log(expenses)
  const incomes = useSelector(getIncomes);
  console.log(incomes)
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.arrowContainer}>
          <img src={arrow} alt="arrow" />
        </div>
        <div className={css.infoContainer}>
          <p className={css.paragraph}>Total Income</p>
          <div className={css.balanceContainer}>
            <span className={css.balance}>${incomes.reduce((n, {amount}) => n + Number(amount), 0).toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className={css.container}>
        <div className={css.arrowContainer}>
          <img src={arrow} alt="arrow" className={css.rotatedArrow} />
        </div>
        <div className={css.infoContainer}>
          <p className={css.paragraph}>Total Expense</p>
          <div className={css.balanceContainer}>
            <span className={css.balance}>${expenses.reduce((n, { amount }) => n + Number(amount), 0).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionsTotalAmount;
