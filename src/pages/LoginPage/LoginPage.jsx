import React from "react";
import AuthForm from "../../components/AuthForm - SignIn/AuthForm";
import BgImageWrapper from "../../components/BgImageWrapper/BgImageWrapper";
import css from "../LoginPage/LoginPage.module.css";
import styled from "styled-components";

const ResponsiveDiv = styled.div`
  // Media query for screens smaller than 768px
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function LoginPage() {
  return (
    <div className={css.pageContainer}>
      <ResponsiveDiv>
        <BgImageWrapper />
      </ResponsiveDiv>
      <AuthForm />
    </div>
  );
}
