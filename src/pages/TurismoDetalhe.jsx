// src/pages/TurismoDetalhe.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import atracoesData from "../data/atracoes"; // Importa os dados das atrações

function TurismoDetalhe() {
  const { id } = useParams(); // Pega o ID da atração da URL
  const [atracao, setAtracao] = useState(null);

  useEffect(() => {
    // Busca a atração correspondente ao ID
    const foundAtracao = atracoesData.find((item) => item.id === id);
    setAtracao(foundAtracao);
  }, [id]); // Dependência do useEffect é o ID para re-renderizar se o ID mudar

  if (!atracao) {
    return <div className="p-4 max-w-3xl mx-auto text-center">Atração não encontrada.</div>;
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{atracao.titulo}</h2>
      {atracao.imagem && (
        <img
          src={atracao.imagem}
          alt={atracao.titulo}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      <p className="text-gray-700">{atracao.descricao}</p>
      {atracao.localizacao && <p className="mt-2 text-gray-600">Localização: {atracao.localizacao}</p>}
      {atracao.instagram && (
        <p className="text-gray-600">
          Instagram:{" "}
          <a
            href={atracao.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {atracao.handleInstagram || atracao.instagram.split('/').pop()}
          </a>
        </p>
      )}
      <Link to="/turismo" className="mt-6 inline-block text-blue-600 hover:underline">
        Voltar
      </Link>
    </div>
  );
}

export default TurismoDetalhe;