import React from "react";
import "./style.css";
import Header from "../Header";

const Main = ({ children, ...headerProps }) => {
  return (
    <>
      <Header {...headerProps} />
      <main className="content container-fluid">
        <div className="p-3 mt-3">{children}</div>
      </main>
    </>
  );
};
export default Main;
