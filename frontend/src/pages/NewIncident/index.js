import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import api from '../../services/api';

import "./styles.css";
import "../../global.css";
import LogoImg from "../../assets/logo.svg";

export default function NewIncident() {

  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [value, setvalue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }

  }
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

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Titulo do Caso"
            value={title}
            onChange={e => settitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setdescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setvalue(e.target.value)}
          />

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};