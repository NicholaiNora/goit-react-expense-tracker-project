import React from "react";
import Chart from "./Chart";
import css from "./TransactionsChart.module.css";
import { useSelector } from "react-redux";
import { getExpenses } from "../../redux/selectors";

function TransactionsChart() {
  const expenses = useSelector(getExpenses);
  const uniqueCategories = expenses.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.category === value.category)
  );
  const color = uniqueCategories.map((expense) => expense.color);
  console.log(uniqueCategories);

  const countAllOccurrences = (array, key) => {
    return array.reduce((acc, obj) => {
      acc[obj[key]] = (acc[obj[key]] || 0) + 1;
      return acc;
    }, {});
  };
  const occurences = countAllOccurrences(expenses, "category");
  console.log(occurences);
  const arrayOfOccurences = Object.values(occurences);
  const total = arrayOfOccurences.reduce((acc, value) => acc + value, 0);

  const percentages = arrayOfOccurences.map(value => `${((value / total) * 100).toFixed(2)}%`);

  console.log(percentages);
  // prettier-ignore
  // const buttonColor = ["#0EBB69","#11e17e","#2def93","#53f2a7", "#87f6c2","#c1fadf","#f8fefb","#c3fbe0","#92f7c7","#79f5ba", "#10d577","#0da95f", "#0a834a","#06532f","#075d34","#0a8249", "#0EF387", "#FAFAFA", "#29292B"] //https://www.canva.com/colors/color-wheel/
  return (
    <div className={css.container}>
      <p className={css.paragraph}>Expenses categories</p>
      <div className={css.chartContainer}>
        <div className={css.chart}>
          <Chart color={color} occurences={occurences} />
        </div>
        <ul className={css.chartList}>
          {uniqueCategories.map(({ category, color, id}, index) => (
            <li className={css.chartItem} style={{ color: color }} key={id}>
              <p className={css.chartParagraph}>{category}</p>
              <span className={css.chartSpan}>{percentages[index]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TransactionsChart;
