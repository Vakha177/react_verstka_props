import React from "react";
import style from '../Sidebar/Sidebar.module.css'

export const Menu = () => { 
    return (
        <div className={style.Nav}>
        <ul className={style.ul}>
            <li><a href='/'><b>Гаджеты и аксессуары</b></a></li>
            <li><a href='/'><b>Бытовая техника</b></a></li>
            <li><a href='/'><b>Прочее</b></a></li>
        </ul>
    </div>
    )
}