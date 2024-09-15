import React, { useRef, useState } from "react";
import ReactModal from "react-modal";
import { ReactComponent as CloseButton } from "../images/closeButton.svg";
import { ReactComponent as Check } from "../images/check.svg";
import { ReactComponent as Edit } from "../images/edit.svg";
import { ReactComponent as Trash } from "../images/trash.svg";
import css from "./CategoriesModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  toggleEdit,
  updateTask,
  closeModal,
} from "../../redux/categorySlice";
import { getCategory } from "../../redux/selectors";
import useClickOutside from "../UserBarBtn/clickOutside";

function CategoriesModal({ handleCloseModal, isOpen, handleCategory, transaction}) {
  const dispatch = useDispatch();
  const categories = useSelector(getCategory);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form.elements.category.value);
    dispatch(addTask(form.elements.category.value));
    form.reset();
  };

  const handleEdit = (id) => {
    dispatch(toggleEdit(id));
  };

  const afterOpenModal = () => {
    dispatch(closeModal());
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleCheck= (text) => {
    handleCategory(text);
    handleCloseModal();
  }

  // const handleBlur = (category) => {
  //   dispatch(closeModal(category));
  // };

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
      onAfterOpen={afterOpenModal}
      overlayClassName={css.overlay}
    >
      <div className={css.wrapper}>
        <div>
          <h2 className={css.title}>{transaction}</h2>
          <CloseButton className={css.closeButton} onClick={handleCloseModal} />
          <p className={css.paragraph}>All Category</p>
          <ul className={css.categoryList}>
            {categories.map((category) => (
              <li className={css.categoryItem} key={category.id}>
                {category.isEditing ? (
                  <Form category={category} />
                ) : (
                  <>
                    <p className={css.categoryName}>{category.text}</p>
                    <ul className={css.iconList}>
                      <li
                        className={css.iconItem}
                        onClick={() => handleCheck(category.text)}
                      >
                        <Check />
                      </li>
                      <li
                        className={css.iconItem}
                        onClick={() => handleEdit(category.id)}
                      >
                        <Edit />
                      </li>
                      <li
                        className={css.iconItem}
                        onClick={() => handleDelete(category.id)}
                      >
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

function Form({ category }) {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSave = (event) => {
    event.preventDefault();

    if (inputValue === "") {
      dispatch(updateTask(category.text));
    }
    const form = event.target;
    dispatch(updateTask(inputValue));
    form.reset();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const wrapperRef = useRef();
  useClickOutside(wrapperRef, () => {
    dispatch(closeModal());
  });
  return (
    <>
      <form onSubmit={handleSave} ref={wrapperRef}>
        <input
          type="text"
          name="editText"
          placeholder={category.text}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
        />
        <button type="submit">save</button>
      </form>
    </>
  );
}

export default CategoriesModal;
