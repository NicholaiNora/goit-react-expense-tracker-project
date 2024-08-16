import React from "react";
import arrow from "../images/arrow.svg";
import css from "./DecorationTab.module.css";

function DecorationTab({className}) {
  return (
    <div className={className}>
      <div className={css.container}>
        <div className={css.arrowContainer}>
          <img src={arrow} alt="arrow" />
        </div>
        <div className={css.infoContainer}>
          <p className={css.paragraph}>Your Balance</p>
          <div className={css.balanceContainer}>
            <span className={css.balance}>$632.000</span>
            <div className={css.percentageContainer}>
              <span className={css.percentage}>+1.29%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DecorationTab;
