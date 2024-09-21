import React, { Fragment} from "react";
import TransactionsTotalAmount from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import css from "./IncomePage.module.css";
import find from "../../components/images/find.svg";
import pen from "../../components/images/pen.svg";
import trash from "../../components/images/delete.svg";
import { getFilteredIncomes, getStatusFilter } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

export default function IncomePage() {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(setFilter({ value, name }));
  };

  const filteredIncomes = useSelector(getFilteredIncomes);
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div>
          <h2 className={css.title}>All Income</h2>
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
              placeholder="Search for anything.."
              name="filter"
              value={filter.text}
              onChange={handleChange}
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
            {filteredIncomes.map((income) => (
              <Fragment key={income.id}>
                <div>{income.category}</div>
                <div>{income.comment}</div>
                <div>{income.date}</div>
                <div>{income.time}</div>
                <div>{income.amount}</div>
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
