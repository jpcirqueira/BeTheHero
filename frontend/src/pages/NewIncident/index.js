import React from "react";
import { Link} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import "./styles.css";
import "../../global.css";
import LogoImg from "../../assets/logo.svg";

export default function NewIncident() {

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="main-logo" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para ajudar a encontrar um heroi para
            resolver isso!
          </p>
          <Link className="back-link" to="/profile">
            <FaArrowLeft height={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input
            placeholder="Titulo do Caso"
          />
          <textarea
            placeholder="Descrição"
          />
          <input
            placeholder="Valor em reais"
          />

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};