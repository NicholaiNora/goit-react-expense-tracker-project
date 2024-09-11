import React from "react";
import { Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import Logo from "../Logo/Logo";
import BgImageWrapper from "../BgImageWrapper/BgImageWrapper";


export default function SharedLayout() {
  return (
    <section className={css.container}>

        <Logo />

      <div className={css.pageContainer}>
        <BgImageWrapper />
        <Outlet />
      </div>
    </section>
  );
}
