import React from 'react';
import style from "../Sidebar/Sidebar.module.css"
import {Menu} from './Menu'
const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Menu />
    </div>
  );
};

export default Sidebar;