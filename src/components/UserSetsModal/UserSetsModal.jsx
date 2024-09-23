import React, { useRef, useState } from "react";
import ReactModal from "react-modal";
import css from "./UserSetsModal.module.css";
import { ReactComponent as CloseButton } from "../images/closeButton.svg";
import UserSelect from "./UserSelect";
import { useDispatch, useSelector } from "react-redux";
import { getCurrency, getProfileName, getProfilePhoto } from "../../redux/selectors";
import {
  changeCurrency,
  changeName,
  changePhoto,
  removePhoto,
} from "../../redux/profileSlice";

// import openArrow from "../images/openarrow.svg";

function UserSetsModal({ handleCloseModal, isOpen }) {
  const dispatch = useDispatch();
  const avatar = useSelector(getProfilePhoto);
  const currency = useSelector(getCurrency);
  const userName = useSelector(getProfileName);
  const [selectedOption, setSelectedOption] = useState(currency);
  const [profileName, setProfileName] = useState(userName);
  const fileInputRef = useRef();

  const handleChange = (event) => {
    // do something with event data
    dispatch(changePhoto(event.target.value));
  };

  const handleRemove = () => {
    // do something with event data
    dispatch(removePhoto());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeCurrency(selectedOption));
    dispatch(changeName(profileName));
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    setProfileName(e.target.value);
  };

  const options = [
    { value: "₱ PHP", label: "₱ PHP" },
    { value: "$ USD", label: "$ USD" },
    { value: "₴ UAH", label: "₴ UAH" },
    { value: "€ EUR", label: "€ EUR" },
  ];

  const handleCurrency = (actionMeta) => {
    setSelectedOption(actionMeta)
  }

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
            multiple={false}
            ref={fileInputRef}
            hidden
          />
          <button type="button"
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
        <form className={css.form} onSubmit={handleSubmit}>
          <UserSelect
            defaultValue={currency}
            options={options}
            onChange={handleCurrency}
          />
          <input
            type="text"
            className={css.input}
            placeholder="Input Name"
            name="text"
            value={profileName}
            onChange={handleInputChange}
            onFocus={e => e.target.select()}
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
