import { useState, useRef } from "react";
import css from "./MobileUserBarBtn.module.css";
import openArrow from "../images/openarrow.svg";
import { ReactComponent as Profile } from "../images/profile.svg";
import { ReactComponent as Logout } from "../images/logout.svg";
import UserSetsModal from "../UserSetsModal/UserSetsModal";
import useClickOutside from "./clickOutside";
import { useSelector } from "react-redux";
import { getProfileName, getProfilePhoto } from "../../redux/selectors";
function MobileUserBarBtn({ setIsModalOpen, isModalOpen, modalRef }) {
  const [isOpen, setOpen] = useState(false);
  const wrapperRef = useRef("menu");
  const avatar = useSelector(getProfilePhoto);
  const userName = useSelector(getProfileName);
  useClickOutside(wrapperRef, () => {
    setOpen(false);
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setOpen(!isOpen);
  };
  
  return (
    <div className={css.wrapper} ref={wrapperRef}>
      <div className={css.dropdown} onClick={handleClick}>
        <img
          src={avatar[avatar.length - 1]}
          alt="Profile"
          className={css.avatar}
        />
        <p className={css.avatarName}>{userName}</p>
        <img
          src={openArrow}
          alt="Open Arrow"
          className={isOpen ? css.closeArrow : css.openArrow}
        />
        <UserSetsModal
          modalRef={modalRef}
          handleCloseModal={handleCloseModal}
          isOpen={isModalOpen}
        />
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

export default MobileUserBarBtn;
