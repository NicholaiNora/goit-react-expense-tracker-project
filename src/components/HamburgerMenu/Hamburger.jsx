import React, { useState } from "react";
import css from "./Hamburger.module.css";
import HamburgerMenu from "./HamburgerMenu";

function Humburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        className={css.hamburger}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div
          className={css.line1}
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0)",
            backgroundColor: open ? "rgba(12, 13, 13, 1)" : "#fafafa",
          }}
        />
        <div
          className={css.line2}
          style={{
            transform: open ? "rotate(-45deg)" : "rotate(0)",
            backgroundColor: open ? "rgba(12, 13, 13, 1)" : "#fafafa",
          }}
        />
      </span>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Humburger;
