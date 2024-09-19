import React, { Fragment, useState } from "react";
import TransactionsTotalAmount from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import css from "./ExpensePage.module.css";
import find from "../../components/images/find.svg";
import pen from "../../components/images/pen.svg";
import trash from "../../components/images/delete.svg";
import { getExpenses } from "../../redux/selectors";
import { useSelector } from "react-redux";

export default function ExpensePage() {
  const [date, setDate] = useState("");
  const expenses = useSelector(getExpenses);
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div>
          <h2 className={css.title}>All Expense</h2>
          <p className={css.paragraph}>
            View and manage every transaction seamlessly! Your entire financial
            landscape, all in one place.
          </p>
        </div>
        <TransactionsTotalAmount />
      </div>
      <div className={css.tableWrap}>
        <form className={css.form}>
          <div className={css.searchContainer}>
            <input
              type="text"
              placeholder="Search for anything.."
              className={css.searchInput}
            />
            <img src={find} alt="find" className={css.find} />
          </div>
          <div className={css.dateContainer}>
            <input
              type="date"
              name="date"
              className={date ? css.hasDate : css.placeholder}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </form>
        <div className={css.tableContainer}>
          <div className={css.table}>
            <div>Category</div>
            <div>Comment</div>
            <div>Date</div>
            <div>Time</div>
            <div>Sum</div>
            <div>Actions</div>
          </div>
          <div className={css.tableData}>
            {expenses.map((expense) => (
              <Fragment key={expense.id}>
                <div>{expense.category}</div>
                <div>{expense.comment}</div>
                <div>{expense.date}</div>
                <div>{expense.time}</div>
                <div>{expense.amount}</div>
                <div>
                  <ul className={css.tableButtonList}>
                    <li className={css.tableButtonItem}>
                      <button className={css.editButton}>
                        <img src={pen} alt="pen" />
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className={css.deleteButton}>
                        <img src={trash} alt="delete" />
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
