import React, { useRef, useState } from "react";
import ReactModal from "react-modal";
import css from "./UserSetsModal.module.css";
import { ReactComponent as CloseButton } from "../images/closeButton.svg";
import UserSelect from "./UserSelect";
import { useDispatch, useSelector } from "react-redux";
//prettier-ignore
import { getCurrency, getProfilePhoto } from "../../redux/selectors";
import {
  changeCurrency,
  changeName,
  changePhoto,
  removePhoto,
} from "../../redux/profileSlice";
import { userAvatar, userInfo } from "../../redux/users/usersOperations";
import { selectUserName } from "../../redux/users/usersSelectors";

// import openArrow from "../images/openarrow.svg";

function UserSetsModal({ handleCloseModal, isOpen, modalRef }) {
  const dispatch = useDispatch();
  const avatar = useSelector(getProfilePhoto);
  const [file, setFile] = useState(null);
  const currency = useSelector(getCurrency);
  const userName = useSelector(selectUserName);
  const [selectedOption, setSelectedOption] = useState(currency);
  const fileInputRef = useRef();
  const inputRef = useRef();

  const fd = new FormData();
  fd.append = ("file", file);
  console.log(fd);

  const handleChange = (event) => {
    // do something with event data
    dispatch(changePhoto(event.target.value));
    setFile(event.target.files[0]);
  };

  const handleRemove = () => {
    // do something with event data
    dispatch(removePhoto());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userInfo({
        name: inputRef.current.value,
        currency: "usd",
      })
    );
    dispatch(userAvatar(fd));
    dispatch(changeCurrency(selectedOption));
    dispatch(changeName(inputRef.current.value));
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    inputRef.current.value = e.target.value;
  };

  const options = [
    { value: "$ USD", label: "$ USD" },
    { value: "₴ UAH", label: "₴ UAH" },
    { value: "€ EUR", label: "€ EUR" },
  ];

  const handleCurrency = (actionMeta) => {
    setSelectedOption(actionMeta);
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
      ref={modalRef}
    >
      <p className={css.title}>Profile Settings</p>
      <CloseButton className={css.closeButton} onClick={handleCloseModal} />
      <div className={css.avatarContainer}>
        <div className={css.avatarWrapper}>
          <img
            src={avatar[avatar.length - 1]}
            alt="Profile"
            className={css.avatar}
          />
        </div>
        <div className={css.avatarButtonContainer}>
          <input
            type="file"
            onChange={handleChange}
            ref={fileInputRef}
            hidden
            accept="image/*" // Accept only image files
          />
          <button
            type="button"
            className={css.upload}
            onClick={() => fileInputRef.current.click()}
          >
            Upload new photo
          </button>
          <button type="button" className={css.remove} onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
      <div className={css.inputContainer}>
        <form
          className={css.form}
          onSubmit={handleSubmit}
          enctype="multipart/form-data"
        >
          <UserSelect
            defaultValue={currency}
            options={options}
            onChange={handleCurrency}
            width={96}
          />
          <input
            type="text"
            className={css.input}
            placeholder="Input Name"
            name="text"
            ref={inputRef}
            defaultValue={userName}
            onChange={handleInputChange}
            onFocus={(e) => e.target.select()}
          />
          <button type="submit" className={css.save}>
            Save
          </button>
        </form>
      </div>
    </ReactModal>
  );
}

export default UserSetsModal;
