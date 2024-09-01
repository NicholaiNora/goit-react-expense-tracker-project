import React from "react";
import Logo from "../../components/Logo/Logo";
import css from "../WelcomeHomePage/WelcomeHomePage.module.css";
import BgImageWrapper from "../../components/BgImageWrapper/BgImageWrapper";
import AuthForm from "../../components/AuthForm - SignUp/AuthForm";

export default function RegisterPage() {
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
