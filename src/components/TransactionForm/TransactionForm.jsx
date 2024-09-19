import React, { useState } from "react";
import css from "./TransactionForm.module.css";
import CategoriesModal from "../CategoriesModal/CategoriesModal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/transactionsSlice";

function TransactionForm() {
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  // const [category, setCategory] = useState("");
  // const [transaction, setTransaction] = useState("expense");
  const [formData, setFormData] = useState({ transaction: "expense", date: "", time: "", category: "", amount: "", comment: "" });
  const dispatch = useDispatch();

  const handleCategory = (text) => {
    setFormData({ ...formData, category: text });
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // const handleRadioChange = (e) => {
  //   console.log(e.target.value);
  //   setTransaction(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // for (let [key, value] of formData.entries()) {
    //   console.log({ key: value });  
    console.log(formData);
    dispatch(addTask(formData))
    // }
  }

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.radioList} onChange={handleChange}>
          <label>
            <input
              type="radio"
              id="expense"
              name="transaction"
              value="expense"
              defaultChecked={formData.transaction === "expense"}
            />
            Expense
          </label>
          <label>
            <input
              type="radio"
              id="income"
              name="transaction"
              value="income"
              defaultChecked={formData.transaction === "income"}
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
              className={formData.date ? css.hasDate : css.placeholder}
              onChange={handleChange}
            />
          </div>
          <div className={css.timeContainer}>
            <p htmlFor="time">Time</p>
            <input
              type="time"
              id="time"
              name="time"
              className={formData.time ? css.hasTime : css.placeholder}
              onChange={handleChange}
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
            value={formData.category}
      
            readOnly
          />
          <CategoriesModal
            handleCloseModal={handleCloseModal}
            isOpen={showModal}
            handleCategory={handleCategory}
            transaction={formData.transaction}
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
              value={formData.amount}
              onChange={handleChange}
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
            value={formData.comment}
            onChange={handleChange}
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
