import React from "react";
import ReactModal from "react-modal";
import css from "./UserSetsModal.module.css";
import { ReactComponent as CloseButton } from "../images/closeButton.svg";
import avatar from "../images/profile_pic.jpg";
import Select from "./Select";
// import openArrow from "../images/openarrow.svg";

function UserSetsModal({ handleCloseModal, isOpen }) {
  // const textInput = useRef(null);

  // useEffect(() => {
  //   textInput.current?.focus();
  // }, []);

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
    >
      <p className={css.title}>Profile Settings</p>
      <CloseButton className={css.closeButton} onClick={handleCloseModal} />
      <div className={css.avatarContainer}>
        <img src={avatar} alt="Profile" className={css.avatar} />
        <div className={css.avatarButtonContainer}>
          <button className={css.upload}>Upload new photo</button>
          <button className={css.remove}>Remove</button>
        </div>
      </div>
      <div className={css.inputContainer}>
        <form className={css.form}>
          <Select />
          <input type="text" className={css.input} placeholder="Input Name" />
          <button type="submit" className={css.save}>
            Save
          </button>
        </form>
      </div>
    </ReactModal>
  );
}

export default UserSetsModal;
