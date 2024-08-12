import React from "react";
import UserBarBtn from "../UserBarBtn/UserBarBtn";
import { ReactComponent as CloseButton } from "../images/closeButtonTablet.svg";
import css from "./BurgerMenu.module.css";

export default function BurgerMenu() {
  return (
    <div className={css.burgerMenuContainer}>
      <div className={css.topContainer}>
        <UserBarBtn />
        <CloseButton className={css.closeButton} />
      </div>
      <div className={css.buttonsContainer}>
        <button className={css.burgerMenuBtn}>All Expense</button>
        <button className={css.burgerMenuBtn}>All Income</button>
      </div>
    </div>
  );
}
