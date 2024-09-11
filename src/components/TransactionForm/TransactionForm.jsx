import React, { useState } from "react";
import css from "./TransactionForm.module.css";
import CategoriesModal from "../CategoriesModal/CategoriesModal";
function TransactionForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form className={css.form}>
        <ul className={css.radioList}>
          <li className={css.radioItem}>
            <input
              type="radio"
              id="expense"
              name="transaction"
              value="expense"
            />
            <label htmlFor="expense">Expense</label>
          </li>
          <li className={css.radioItem}>
            <input type="radio" id="income" name="transaction" value="income" />
            <label htmlFor="income">Income</label>
          </li>
        </ul>
        <div className={css.datetimeContainer}>
          <div className={css.dateContainer}>
            <p htmlFor="date">Date</p>
            <input
              type="date"
              id="date"
              name="date"
              className={date ? css.hasDate : css.placeholder}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className={css.timeContainer}>
            <p htmlFor="time">Time</p>
            <input
              type="time"
              id="time"
              name="time"
              className={time ? css.hasTime : css.placeholder}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
        <div className={css.categoryContainer}>
          <p htmlFor="category">Category</p>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Different Category"
            onClick={handleOpenModal}
          />
          <CategoriesModal handleCloseModal={handleCloseModal} isOpen={showModal} />
        </div>
        <div className={css.amountContainer}>
          <p htmlFor="amount">Sum</p>
          <div className={css.amountInputWrapper}>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter the sum"
            />
            <span className={css.currency}>UAH</span>
          </div>
        </div>
        <div className={css.commentContainer}>
          <p htmlFor="comment">Comment</p>
          <textarea id="comment" name="comment" rows="" cols="" placeholder="Enter the text"></textarea>
        </div>
        <button type="submit" className={css.button}>
          Add
        </button>
      </form>
    </>
  );
}

export default TransactionForm;
