import React from "react";
import WelcomePage from "../../components/WelcomePage/WelcomePage";
import BgImageWrapper from "../../components/BgImageWrapper/BgImageWrapper";
import css from "../WelcomeHomePage/WelcomeHomePage.module.css"

export default function WelcomeHomePage() {
  return (
    <div className={css.pageContainer}>
      <BgImageWrapper />
      <WelcomePage />
    </div>
  );
}
