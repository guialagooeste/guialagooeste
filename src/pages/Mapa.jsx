// src/pages/Mapa.jsx

import React from "react";
import { Link } from "react-router-dom";

function Mapa() {
  return (
    <div className="p-4 max-w-3xl mx-auto relative">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Mapa da Região</h2>

      <div className="relative w-full h-[400px] bg-gray-100 rounded overflow-hidden shadow-md">
        <img
          src="/mapa-lago-oeste.jpg"
          alt="Mapa da região do Lago Oeste com pontos de interesse"
          className="w-full h-full object-cover"
        />

        {/* Marcadores manuais sobre a imagem, agora linkando para a rota genérica */}
        <div className="absolute top-[35%] left-[45%]">
          <Link to="/atracoes/trilha-do-calango">
            <div className="bg-red-600 text-white text-xs px-2 py-1 rounded shadow cursor-pointer hover:bg-red-700 transition-colors duration-200">
              Trilha do Calango
            </div>
          </Link>
        </div>

        <div className="absolute top-[42%] left-[52%]">
          <Link to="/atracoes/sitio-titara">
            <div className="bg-green-600 text-white text-xs px-2 py-1 rounded shadow cursor-pointer hover:bg-green-700 transition-colors duration-200">
              Sítio Titara
            </div>
          </Link>
        </div>

        <div className="absolute top-[50%] left-[60%]">
          <Link to="/atracoes/balanceu">
            <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded shadow cursor-pointer hover:bg-blue-700 transition-colors duration-200">
              BalanCéu
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mapa;