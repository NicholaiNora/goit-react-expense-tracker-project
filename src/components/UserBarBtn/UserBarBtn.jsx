import { useState, useRef } from "react";
import css from "./UserBarBtn.module.css";
import openArrow from "../images/openarrow.svg";
import { ReactComponent as Profile } from "../images/profile.svg";
import { ReactComponent as Logout } from "../images/logout.svg";
import UserSetsModal from "../UserSetsModal/UserSetsModal";
import useClickOutside from "./clickOutside";
import { useSelector } from "react-redux";
import { getProfileName, getProfilePhoto } from "../../redux/selectors";
function UserBarBtn() {
  const [isOpen, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const wrapperRef = useRef("menu");
  const avatar = useSelector(getProfilePhoto);
  const userName = useSelector(getProfileName);
  useClickOutside(wrapperRef, () => {
    setOpen(false);
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={css.wrapper} ref={wrapperRef}>
      <div className={css.dropdown} onClick={handleClick}>
        <img src={avatar[avatar.length - 1]} alt="Profile" className={css.avatar} />
        <p className={css.avatarName}>{userName}</p>
        <img
          src={openArrow}
          alt="Open Arrow"
          className={isOpen ? css.closeArrow : css.openArrow}
        />
        <UserSetsModal handleCloseModal={handleCloseModal} isOpen={showModal} />
      </div>
      <div className={isOpen ? css.dropdownOpen : css.dropdownClose}>
        <ul className={css.dropdownList}>
          <li className={css.dropdownItem} onClick={handleOpenModal}>
            <Profile className={css.dropdownIcon} />
            <p className={css.dropdownParagraph}>Profile settings</p>
          </li>
          <li className={css.dropdownItem}>
            <Logout className={css.dropdownIcon} />
            <p className={css.dropdownParagraph}>Log out</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserBarBtn;
