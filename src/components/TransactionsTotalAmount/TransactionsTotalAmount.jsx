import React from "react";
import css from "./TransactionsTotalAmount.module.css";
import arrow from "../images/arrow.svg";

function TransactionsTotalAmount() {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.arrowContainer}>
          <img src={arrow} alt="arrow" />
        </div>
        <div className={css.infoContainer}>
          <p className={css.paragraph}>Total Income</p>
          <div className={css.balanceContainer}>
            <span className={css.balance}>$632.000</span>
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
            <span className={css.balance}>$632.000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionsTotalAmount;
