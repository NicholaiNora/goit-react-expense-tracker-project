import React, { useState } from "react";
import css from "./EditFormModal.module.css";
import CategoriesModal from "../CategoriesModal/CategoriesModal";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux/transactionsSlice";
import ReactModal from "react-modal";
import { ReactComponent as CloseButton } from "../images/closeButton.svg";
// import { getFindIdExpenses } from "../../redux/selectors";

function EditFormModal({
  handleCloseModal,
  modalIsOpen,
  formValue,
  setFormValue,
}) {
  const [inputShowModal, setInputShowModal] = useState(false);
  // const findId = useSelector(getFindIdExpenses);
  console.log(formValue);

  const dispatch = useDispatch();

  const handleCategory = (text) => {
    setFormValue({ ...formValue, category: text });
  };

  const OpenModal = () => {
    setInputShowModal(true);
  };

  const CloseModal = () => {
    setInputShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask(formValue));
    handleCloseModal();
  };

  return (
    <ReactModal
      onRequestClose={() => {
        handleCloseModal();
      }}
      contentLabel="onRequestClose"
      shouldCloseOnOverlayClick={true}
      isOpen={modalIsOpen}
      className={css.editModal}
      overlayClassName={css.editOverlay}
      ariaHideApp={false}
    >
      <form className={css.form} onSubmit={handleSubmit}>
        <CloseButton className={css.closeButton} onClick={handleCloseModal} />
        <div className={css.radioList} onChange={handleChange}>
          <label>
            <input
              type="radio"
              id="expense"
              name="transaction"
              value="expense"
              defaultChecked={formValue.transaction === "expense"}
            />
            Expense
          </label>
          <label>
            <input
              type="radio"
              id="income"
              name="transaction"
              value="income"
              defaultChecked={formValue.transaction === "income"}
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
              value={formValue.date}
              className={formValue.date ? css.hasDate : css.placeholder}
              onChange={handleChange}
            />
          </div>
          <div className={css.timeContainer}>
            <p htmlFor="time">Time</p>
            <input
              type="time"
              id="time"
              name="time"
              value={formValue.time}
              className={formValue.time ? css.hasTime : css.placeholder}
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
            onClick={OpenModal}
            value={formValue.category}
            readOnly
          />
          <CategoriesModal
            handleCloseModal={CloseModal}
            isOpen={inputShowModal}
            handleCategory={handleCategory}
            transaction={formValue.transaction}
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
              value={formValue.amount}
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
            value={formValue.comment}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className={css.button}>
          Save
        </button>
      </form>
    </ReactModal>
  );
}

export default EditFormModal;
