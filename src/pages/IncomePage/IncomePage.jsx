import React, { Fragment, useState} from "react";
import TransactionsTotalAmount from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import css from "./IncomePage.module.css";
import find from "../../components/images/find.svg";
import pen from "../../components/images/pen.svg";
import trash from "../../components/images/delete.svg";
import { getCurrency, getFilteredIncomes, getStatusFilter } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import EditFormModal from "../../components/EditFormModal/EditFormModal";
import { deleteTask } from "../../redux/transactionsSlice";
// import { setFind } from "../../redux/findSlice";

export default function IncomePage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [formValue, setFormValue] = useState("")
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();
  const currency = useSelector(getCurrency);

  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(setFilter({ value, name }));
  };

  const handleClick = (value) => {
    setShowEditModal(true);
    // dispatch(setFind(id))
    setFormValue(value);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
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
                <div>{income.amount} / {currency.value.substring(2)}</div>
                <div>
                  <ul className={css.tableButtonList}>
                    <li className={css.tableButtonItem}>
                      <button className={css.editButton} onClick={() => handleClick(income)}>
                        <img src={pen} alt="pen" />
                        Edit
                      </button>
                      <EditFormModal handleCloseModal={handleCloseModal} modalIsOpen={showEditModal} formValue={formValue} setFormValue={setFormValue} />
                    </li>
                    <li>
                      <button className={css.deleteButton} onClick={() => dispatch(deleteTask(income))}>
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
