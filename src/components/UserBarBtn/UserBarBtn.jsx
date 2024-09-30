import { useState, useRef } from "react";
import css from "./UserBarBtn.module.css";
import openArrow from "../images/openarrow.svg";
import { ReactComponent as Profile } from "../images/profile.svg";
import { ReactComponent as Logout } from "../images/logout.svg";
import UserSetsModal from "../UserSetsModal/UserSetsModal";
import useClickOutside from "./clickOutside";
import { useDispatch, useSelector } from "react-redux";
import {  getProfilePhoto } from "../../redux/selectors";
import { currentUser } from "../../redux/users/usersOperations";
import { selectUserName } from "../../redux/users/usersSelectors";
import LogOutModal from "../LogOutModal/LogOutModal";

function UserBarBtn() {
  const [isOpen, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [logOutModal, setLogOutModal] = useState(false);
  const wrapperRef = useRef("menu");
  const avatar = useSelector(getProfilePhoto);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch()

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
    dispatch(currentUser());
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
        <LogOutModal handleCloseModal={() => {setLogOutModal(false)}} isOpen= {logOutModal} />
      </div>
      <div className={isOpen ? css.dropdownOpen : css.dropdownClose}>
        <ul className={css.dropdownList}>
          <li className={css.dropdownItem} onClick={handleOpenModal}>
            <Profile className={css.dropdownIcon} />
            <p className={css.dropdownParagraph}>Profile settings</p>
          </li>
          <li className={css.dropdownItem} onClick={() => {setLogOutModal(true)}}>
            <Logout className={css.dropdownIcon}/>
            <p className={css.dropdownParagraph}>Log out</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserBarBtn;
