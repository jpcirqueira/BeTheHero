import React from "react";
import { Link} from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import "./styles.css";
import LogoImg from "../../assets/logo.svg";


export default function profile() {
  
  return (
    <div className="profile-container">
      <header>
        <img src={LogoImg} alt="Be The Hero" />
        <span>Bem Vindo, APAD</span>
        <Link className="button" to="incidents/new">
          Cadastrar novo Caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
          <li >
            <strong>CASO:</strong>
            <p>caso teste</p>
            <strong>DESCRIÇÃO:</strong>
            <p>descricao teste</p>
            <strong>VALOR:</strong>
            <p>120</p>
            <button type="button">
                <FiTrash2 size={20} color="a8a8b3" />
            </button>
          </li>
      </ul>
    </div>
  );
};