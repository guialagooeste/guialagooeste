// src/pages/Turismo.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card"; // Importa os componentes Card e CardContent
import atracoesData from "../data/atracoes"; // Importa os dados das atrações

function Turismo() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Turismo no Lago Oeste</h2>

      {atracoesData.map((atracao) => (
        <Link to={`/atracoes/${atracao.id}`} key={atracao.id}>
          <Card className="mb-4 hover:shadow-lg cursor-pointer transition-shadow duration-200 ease-in-out">
            <CardContent className="p-4 flex items-center">
              {atracao.imagem && (
                <img
                  src={atracao.imagem}
                  alt={atracao.titulo}
                  className="w-24 h-24 object-cover rounded-lg mr-4 flex-shrink-0"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">{atracao.titulo}</h3>
                <p className="text-gray-700 text-sm">
                  {atracao.descricao.substring(0, 120)}...{" "} {/* Resumo da descrição */}
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default Turismo;