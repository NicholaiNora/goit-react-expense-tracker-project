import React from "react";
import Logo from "../../components/Logo/Logo";
import css from "../WelcomeHomePage/WelcomeHomePage.module.css";
import BgImageWrapper from "../../components/BgImageWrapper/BgImageWrapper";
import WelcomePage from "../../components/WelcomePage/WelcomePage";

export default function WelcomeHomePage() {
  return (
    <section className={css.container}>
      <Logo />
      <div className={css.pageContainer}>
        <BgImageWrapper />
        <WelcomePage />
      </div>
    </section>
  );
}
