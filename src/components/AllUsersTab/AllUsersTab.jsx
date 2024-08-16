import React from "react";
import stack1 from "../images/stack1.png";
import stack2 from "../images/stack2.png";
import stack3 from "../images/stack3.png";
import css from "./AllUsersTab.module.css";

function AllUsersTab() {
  return (
    <div className={css.usersTabContainer}>
      <div className={css.avatarContainer}>
        <img src={stack1} alt="avatar1" className={css.avatar}></img>
        <img src={stack2} alt="avatar2" className={css.avatar}></img>
        <img src={stack3} alt="avatar3" className={css.avatar}></img>
      </div>
      <div className={css.userInfo}>
        <span>1000 users +</span>
        <p>Trusted by users for reliable expense tracking!</p>
      </div>
    </div>
  );
}

export default AllUsersTab;
