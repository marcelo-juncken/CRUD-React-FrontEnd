import React from "react";
import Main from "../Template";

const Home = () => {
  const homeContent = (
    <>
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">
        Sistema para exemplificar a construção de um cadastro desenvolvido em
        React!
      </p>
    </>
  );

  return (
    <Main
      icon="home"
      title="Início"
      subtitle="Projeto do capítulo de React."
    >
      {homeContent}
    </Main>
  );
};
export default Home;
