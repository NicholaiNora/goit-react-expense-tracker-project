import React from "react";
import Chart from "./Chart";
import css from "./TransactionsChart.module.css";

function TransactionsChart() {
  return (
    <div className={css.container}>
      <p className={css.paragraph}>Expenses categories</p>
      <div className={css.chartContainer}>
        <div className={css.chart}>
          <Chart />
        </div>
        <ul className={css.chartList}>
          <li className={css.chartItem}>
            <p className={css.chartParagraph}>Hobby</p>
            <span className={css.chartSpan}>45%</span>
          </li>
          <li className={css.chartItem}>
            <p className={css.chartParagraph}>Products</p>
            <span className={css.chartSpan}>25%</span>
          </li>
          <li className={css.chartItem}>
            <p className={css.chartParagraph}>Cinema</p>
            <span className={css.chartSpan}>20%</span>
          </li>
          <li className={css.chartItem}>
            <p className={css.chartParagraph}>Health</p>
            <span className={css.chartSpan}>10%</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TransactionsChart;
