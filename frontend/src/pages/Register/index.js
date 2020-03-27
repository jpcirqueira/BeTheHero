import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import "./styles.css";
import "../../global.css";

import Logo from "../../assets/logo.svg";


export default function Register(){

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={Logo} alt="Be The Hero" />
          
          <h1>Cadastro</h1>
          <p>
            Faça já o se cadastro, entre na plataforma e ajude pessoas a
            encontrarem os casis da sua ONG!
          </p>

          <Link className="back-Link" to="/">
            <FaArrowLeft height={16} color="#E02041" />
            Não tenho Cadastro
          </Link>

        </section>

        <form>
        <input
            placeholder="Nome da ONG"
          />
          <input
            type="email"
            placeholder="E-mail"
          />
          <input
            placeholder="Whatsapp"
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
            />
            <input
              placeholder="UF"
            />
          </div>

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};