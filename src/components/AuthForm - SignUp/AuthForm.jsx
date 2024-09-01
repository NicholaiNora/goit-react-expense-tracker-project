import React, { useState } from "react";
import css from "./AuthForm.module.css";
import { ReactComponent as SeenPassword } from "../images/passwordseen.svg";
import { ReactComponent as HidePassword } from "../images/passwordhide.svg";

function AuthForm() {
  const [isVisible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      <div className={css.textContainer}>
        <h2 className={css.title}>Sign Up</h2>
        <p className={css.paragraph}>
          Step into a world of hassle-free expense management! Your journey
          towards financial mastery begins here.
        </p>
      </div>
      <form className={css.form}>
        <div className={css.inputWrapper}>
          <label className={css.inputContainer}>
            <input
              type="text"
              id="name"
              name="name"
              //   value=""
              placeholder="Name"
              className={css.input}
            />
          </label>
          <label className={css.inputContainer}>
            <input
              type="email"
              id="email"
              name="email"
              //   value=""
              placeholder="Email"
              className={css.input}
            />
          </label>
          <label className={css.inputContainer}>
            <input
              type={!isVisible ? "password" : "text"}
              id="password"
              name="password"
              //   value=""
              placeholder="Password"
              className={css.input}
            />
            <span className="icon" onClick={toggle}>
              {isVisible ? <SeenPassword /> : <HidePassword />}
            </span>
          </label>
        </div>
        <div className={css.buttonWrapper}>
          <button type="submit" className={css.button}>
            Sign Up
          </button>
          <p className={css.span}>
            Already have Account? <span className={css.link}> Sign In</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
