import React from "react";
import Logo from "../../components/Logo/Logo";
import css from "../WelcomeHomePage/WelcomeHomePage.module.css";
import BgImageWrapper from "../../components/BgImageWrapper/BgImageWrapper";
import AuthForm from "../../components/AuthForm - SignIn/AuthForm";

export default function LoginPage() {
  return (
    <section className={css.container}>
      <Logo />
      <div className={css.pageContainer}>
        <BgImageWrapper />
        <AuthForm />
      </div>
    </section>
  );
}
