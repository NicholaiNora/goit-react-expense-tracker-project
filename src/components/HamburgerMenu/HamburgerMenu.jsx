import React, { useRef } from "react";
import css from "./HamburgerMenu.module.css";
import MobileUserBarBtn from "../MobileUserBarBtn/MobileUserBarBtn";
import MobileTransactionNav from "../MobileTransactionNav/MobileTransactionNav";
import useClickOutside from "../MobileUserBarBtn/clickOutside";
function HamburgerMenu({ open, setOpen }) {
  const wrapperRef = useRef("menu");
  useClickOutside(wrapperRef, () => {
    setOpen(false);
  });

  return (
    <div
      className={css.burgerContainer}
      style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
      ref={wrapperRef}
    >
      <div className={css.closeBar}>
        <MobileUserBarBtn />
        <span
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
        </span>
      </div>
      <MobileTransactionNav setOpen={setOpen} open={open} />
    </div>
  );
}

export default HamburgerMenu;
