import React from "react";
import "./style.css";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <NavItem link="/" icon="home" title="Início" />
        <NavItem link="/users" icon="users" title="Usuários" />
      </nav>
    </aside>
  );
};

export default Nav;