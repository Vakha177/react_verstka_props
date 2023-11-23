import React from "react";
import style from "../Header/Header.module.css";
import logo from "../Fotki/Basket.png";

const Logo = () => {
  return (
    <div className={style.logo}>
      <img className={style.logo_image} src={logo} alt="logo" />
    </div>
  );
};
export default Logo;
