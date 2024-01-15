import React from "react";
import "./style.css";
import {Link} from 'react-router-dom'

const NavItem = ({link, icon, title}) => {
  return (
    <Link to={link}>
      <i className={`fa fa-${icon}`}></i> {title}
    </Link>
  );
};

export default NavItem;
