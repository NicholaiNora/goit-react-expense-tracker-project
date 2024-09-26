import React, { useEffect, useRef, useState } from "react";
import css from "./HamburgerMenu.module.css";
import MobileUserBarBtn from "../MobileUserBarBtn/MobileUserBarBtn";
import MobileTransactionNav from "../MobileTransactionNav/MobileTransactionNav";

function HamburgerMenu({ open, setOpen }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef();
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    // If click is outside the menu and modal, close the menu
    if (
      menuRef.current && !menuRef.current.contains(event.target) && // Click is outside the menu
      modalRef.current.node && !modalRef.current.node.contains(event.target) // Click is outside the modal
    ) {
      setOpen(false); // Close the hamburger menu
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }); // Re-run if menu or modal state changes

  return (
    <div
      className={css.burgerContainer}
      style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
      ref={menuRef}
    >
      <span className={css.closeBar} >
        <MobileUserBarBtn setIsModalOpen={setIsModalOpen} modalRef={modalRef} isModalOpen={isModalOpen} />
        <div
          className={css.closehamburger}
          open={open}
          onClick={() => setOpen(!open)}
        >
          <div
            className={css.line3}
            style={{
              transform: open ? "rotate(45deg)" : "rotate(0)",
              backgroundColor: open ? "rgba(12, 13, 13, 1)" : "#fafafa",
            }}
          />
          <div
            className={css.line4}
            style={{
              transform: open ? "rotate(-45deg)" : "rotate(0)",
              backgroundColor: open ? "rgba(12, 13, 13, 1)" : "#fafafa",
            }}
          />
        </div>
      </span>
      <MobileTransactionNav setOpen={setOpen} open={open} />
    </div>
  );
}

export default HamburgerMenu;
