import React from "react";
import BgImage from "../images/BgImageWrapper.jpg";
import DecorationTab from "../DecorationTab/DecorationTab";
import css from "./BgImageWrapper.module.css";

function BgImageWrapper() {
  return (
    <div className={css.imageContainer}>
      <div className={css.backgroundImage}>
        <img src={BgImage} alt="Backround" className={css.image}></img>
      </div>
      <DecorationTab className={css.decorationTab} />
    </div>
  );
}

export default BgImageWrapper;
