import React from "react";
import css from "./WelcomePage.module.css";
import AuthNav from "../AuthNav/AuthNav";
import AllUsersTab from "../AllUsersTab/AllUsersTab";

function WelcomePage() {
  return (
    <div className={css.contentContainer}>
      <div className={css.contentWrapper}>
        <div className={css.textContainer}>
          <span>Expense log</span>
          <h1>
            Manage Your <span>Finances</span> Masterfully!
          </h1>
          <p>
            ExpenseTracker effortlessly empowers you to take control of your
            finances! With intuitive features, it simplifies the process of
            tracking and managing expenses, allowing for a stress-free mastery
            over your financial world.
          </p>
        </div>
        <AuthNav />
      </div>
      <AllUsersTab />
    </div>
  );
}

export default WelcomePage;
