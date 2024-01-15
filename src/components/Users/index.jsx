import React, { useEffect, useState } from "react";
import Main from "../Template";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir.",
};

const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: { name: "", email: "" },
  list: [],
};

const UserCrud = () => {
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    axios(baseUrl).then((resp) => {
      setState((prevState) => ({ ...prevState, list: resp.data }));
    });
  }, []);

  function load(user) {
    setState((prevState) => ({ ...prevState, user }));
  }

  function remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then((resp) => {
      setState((prevState) => ({
        ...prevState,
        list: getUpdatedList(user, prevState.list, false),
        user: initialState.user,
      }));
    });
  }

  function clear() {
    setState((prevState) => ({ ...prevState, user: initialState.user }));
  }

  function save() {
    const user = state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then((resp) => {
      setState((prevState) => ({
        ...prevState,
        list: getUpdatedList(resp.data, prevState.list),
        user: initialState.user,
      }));
    });
  }

  function getUpdatedList(user, list, add = true) {
    const updatedList = list.filter((u) => u.id !== user.id);
    if (add) updatedList.unshift(user);
    return updatedList;
  }

  function updateField(event) {
    const newUser = { ...state.user, [event.target.name]: event.target.value };
    setState((prevState) => ({ ...prevState, user: newUser }));
  }

  function renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    );
  }

  function renderRows() {
    return state.list.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button onClick={() => load(user)} className="btn btn-warning">
              <i className="fa fa-pencil"></i>
            </button>
            <button onClick={() => remove(user)} className="btn btn-danger ml-2">
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  function renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={state.user.name}
                onChange={(e) => updateField(e)}
                placeholder="Digite o nome..."
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={state.user.email}
                onChange={(e) => updateField(e)}
                placeholder="Digite o e-mail..."
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={save}>
              Salvar
            </button>
            <button className="btn btn-secondary ml-2" onClick={clear}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Main {...headerProps}>
      {renderForm()}
      {renderTable()}
    </Main>
  );
};

export default UserCrud;
