import React, { useRef, useEffect } from "react";
import ReactModal from "react-modal";
import { ReactComponent as CloseButton } from "../images/closeButton.svg";
import { ReactComponent as Check } from "../images/check.svg";
import { ReactComponent as Edit } from "../images/edit.svg";
import { ReactComponent as Trash } from "../images/trash.svg";
import css from "./CategoriesModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  toggleEdit,
  updateTask,
  closeModal,
  changeInput,
} from "../../redux/categorySlice";
import { getCategory } from "../../redux/selectors";

function CategoriesModal({ handleCloseModal, isOpen }) {
  const dispatch = useDispatch();
  const categories = useSelector(getCategory);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form.elements.category.value);
    dispatch(addTask(form.elements.category.value));
    form.reset();
  };

  const handleClick = (id) => {
    dispatch(toggleEdit(id));
  };

  const handleSave = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(updateTask(form.elements.editText.value));
    form.reset();
  };

  const handleChange = (e) => {
    dispatch(changeInput(e.target.value));
  };

  // const afterOpenModal = () => {
  //   dispatch(closeModal());
  // };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleBlur = (category) => {
    dispatch(closeModal(category));
  };

  return (
    <ReactModal
      onRequestClose={() => {
        handleCloseModal();
      }}
      contentLabel="onRequestClose"
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      isOpen={isOpen}
      className={css.modal}
      // onAfterOpen={afterOpenModal}
      overlayClassName={css.overlay}
    >
      <div className={css.wrapper}>
        <div>
          <h2 className={css.title}>Expenses</h2>
          <CloseButton className={css.closeButton} onClick={handleCloseModal} />
          <p className={css.paragraph}>All Category</p>
          <ul className={css.categoryList}>
            {categories.map((category) => (
              <li className={css.categoryItem} key={category.id}>
                {category.isEditing ? (
                  <>
                    <form onSubmit={handleSave}>
                      <input
                        type="text"
                        name="editText"
                        value={category.text}
                        onChange={handleChange}
                        autoFocus
                        onFocus={handleFocus}
                        onBlur={() => handleBlur(category)}
                      />
                      <button type="submit">save</button>
                    </form>
                  </>
                ) : (
                  <>
                    <p className={css.categoryName}>{category.text}</p>
                    <ul className={css.iconList}>
                      <li className={css.iconItem}>
                        <Check />
                      </li>
                      <li
                        className={css.iconItem}
                        onClick={() => handleClick(category.id)}
                      >
                        <Edit />
                      </li>
                      <li className={css.iconItem}>
                        <Trash />
                      </li>
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <form className={css.form} onSubmit={handleSubmit}>
          <p>New Category</p>
          <div className={css.inputContainer}>
            <input type="text" name="category" placeholder="Enter the text" />
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
}

export default CategoriesModal;
