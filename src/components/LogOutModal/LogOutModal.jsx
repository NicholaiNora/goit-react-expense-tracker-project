import React from "react";
import css from "./LogOutModal.module.css";
import ReactModal from "react-modal";
import { ReactComponent as CloseButton } from "../images/closeButton.svg";
import { logOut } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

function LogOutModal({ handleCloseModal, isOpen }) {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <ReactModal
      onRequestClose={() => {
        handleCloseModal();
      }}
      contentLabel="onRequestClose"
      shouldCloseOnOverlayClick={true}
      isOpen={isOpen}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      <CloseButton className={css.closeButton} onClick={handleCloseModal} />
      <p className={css.paragraph}>Are you sure you want to log out?</p>
      <ul className={css.list}>
        <li className={css.item}>
          <button className={css.logout} onClick={handleLogOut}>
            Log out
          </button>
        </li>
        <li className={css.item}>
          <button
            className={css.cancel}
            onClick={() => {
              handleCloseModal();
            }}
          >
            Cancel
          </button>
        </li>
      </ul>
    </ReactModal>
  );
}

export default LogOutModal;
