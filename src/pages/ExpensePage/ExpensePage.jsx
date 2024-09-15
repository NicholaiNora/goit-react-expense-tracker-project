import React, { useState } from "react";
import TransactionsTotalAmount from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import css from "./ExpensePage.module.css";
import find from "../../components/images/find.svg";
import pen from "../../components/images/pen.svg";
import trash from "../../components/images/delete.svg";

export default function ExpensePage() {
  const [date, setDate] = useState("");
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
          <table className={css.table}>
            <thead>
              <tr>
                <th width="142px">Category</th>
                <th width="182px">Comment</th>
                <th width="191px">Date</th>
                <th width="125.5px">Time</th>
                <th width="170px">Sum</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cinema</td>
                <td>John Week 4</td>
                <td>Sn, 3.03.2023</td>
                <td>14:30</td>
                <td>150 / UAH</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td>Cinema</td>
                <td>John Week 4</td>
                <td>Sn, 3.03.2023</td>
                <td>14:30</td>
                <td>150 / UAH</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td>Cinema</td>
                <td>John Week 4</td>
                <td>Sn, 3.03.2023</td>
                <td>14:30</td>
                <td>150 / UAH</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td>Cinema</td>
                <td>John Week 4</td>
                <td>Sn, 3.03.2023</td>
                <td>14:30</td>
                <td>150 / UAH</td>
                <td>
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
                </td>
              </tr>
              <tr>
                <td>Cinema</td>
                <td>John Week 4</td>
                <td>Sn, 3.03.2023</td>
                <td>14:30</td>
                <td>150 / UAH</td>
                <td>
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
