import React from "react";
import Logo from "./Logo.jsx";
import style from './Header.module.css'
import Menu from './Menu.jsx'
const Header = () => {
 return (
    <div className={style.header}>
     <Menu />
     <Logo />
    </div>
 )
}

export default Header