import React, { useState } from "react";
import css from "./TransactionForm.module.css";
import CategoriesModal from "../CategoriesModal/CategoriesModal";

function TransactionForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const [transaction, setTransaction] = useState("expense");

  const handleCategory = (text) => {
    setCategory(text);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setTransaction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  }

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.radioList} onChange={handleRadioChange}>
          <label>
            <input
              type="radio"
              id="expense"
              name="transaction"
              value="expense"
              defaultChecked={transaction === "expense"}
            />
            Expense
          </label>
          <label>
            <input
              type="radio"
              id="income"
              name="transaction"
              value="income"
              defaultChecked={transaction === "income"}
            />
            Income
          </label>
        </div>
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
            value={category}
            readOnly
          />
          <CategoriesModal
            handleCloseModal={handleCloseModal}
            isOpen={showModal}
            handleCategory={handleCategory}
            transaction={transaction}
          />
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
          <textarea
            id="comment"
            name="comment"
            rows=""
            cols=""
            placeholder="Enter the text"
          ></textarea>
        </div>
        <button type="submit" className={css.button}>
          Add
        </button>
      </form>
    </>
  );
}

export default TransactionForm;
