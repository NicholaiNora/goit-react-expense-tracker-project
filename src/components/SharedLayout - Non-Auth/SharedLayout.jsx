import React from "react";
import { Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import Logo from "../Logo/Logo";

export default function SharedLayout() {
  return (
    <section className={css.container}>
      <Logo />
      <Outlet />
    </section>
  );
}
