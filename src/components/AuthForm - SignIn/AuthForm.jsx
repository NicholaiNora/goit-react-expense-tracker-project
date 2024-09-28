import React, { useState } from "react";
import css from "./AuthForm.module.css";
import { ReactComponent as SeenPassword } from "../images/passwordseen.svg";
import { ReactComponent as HidePassword } from "../images/passwordhide.svg";
import { logIn } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function AuthForm() {
  const dispatch = useDispatch()
  const [isVisible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!isVisible);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <div className={css.textContainer}>
        <h2 className={css.title}>Sign In</h2>
        <p className={css.paragraph}>
          Welcome back to effortless expense tracking! Your financial dashboard
          awaits.
        </p>
      </div>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={css.inputWrapper}>
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
            Sign In
          </button>
          <p className={css.span}>
            Don&#8217;t have an account? <NavLink to="/register"><span className={css.link}> Sign Up</span></NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
