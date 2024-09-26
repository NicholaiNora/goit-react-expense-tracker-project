import React from "react";
import Logo from "../Logo/Logo";
import UserBarBtn from "../UserBarBtn/UserBarBtn";
import TransactionsHistoryNav from "../TransactionsHistoryNav/TransactionsHistoryNav";
import css from "./SharedLayoutAuth.module.css";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/Hamburger";

export default function SharedLayoutAuth() {
  return (
    <section className={css.sectionContainer}>
      <header className={css.headerContainer}>
        <Logo />
        <TransactionsHistoryNav />
        <UserBarBtn />
        <HamburgerMenu />
      </header>
      <Outlet />
    </section>
  );
}
