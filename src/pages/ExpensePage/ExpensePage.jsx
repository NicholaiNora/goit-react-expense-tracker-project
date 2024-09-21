import React, { Fragment } from "react";
import TransactionsTotalAmount from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import css from "./ExpensePage.module.css";
import find from "../../components/images/find.svg";
import pen from "../../components/images/pen.svg";
import trash from "../../components/images/delete.svg";
import { getStatusFilter, getFilteredExpenses } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

export default function ExpensePage() {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(setFilter({ value, name }));
  };

  const filteredExpenses = useSelector(getFilteredExpenses);
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
        <form className={css.form} onSubmit={(e) => e.preventDefault}>
          <div className={css.searchContainer}>
            <input
              type="text"
              name="filter"
              value={filter.text}
              onChange={handleChange}
              placeholder="Search for anything.."
              className={css.searchInput}
            />
            <img src={find} alt="find" className={css.find} />
          </div>
          <div className={css.dateContainer}>
            <input
              type="date"
              name="date"
              value={filter.date}
              className={filter.date ? css.hasDate : css.placeholder}
              onChange={handleChange}
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
            {filteredExpenses.map((expense) => (
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
