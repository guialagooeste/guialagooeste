import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card"; // Importa os componentes Card e CardContent
import { MapPin, Store, TreePalm } from "lucide-react"; // Importa os ícones

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
        Bem-vindo ao Guia Lago Oeste
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Explore comércios, trilhas e pontos turísticos da região
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mx-auto">
        <Link to="/turismo">
          <Card className="hover:shadow-lg cursor-pointer transition-shadow duration-200 ease-in-out">
            <CardContent className="flex flex-col items-center p-6">
              <TreePalm className="text-green-600 w-8 h-8 mb-2" />
              <span className="font-semibold text-gray-700">Turismo</span>
            </CardContent>
          </Card>
        </Link>

        <Link to="/comercio">
          <Card className="hover:shadow-lg cursor-pointer transition-shadow duration-200 ease-in-out">
            <CardContent className="flex flex-col items-center p-6">
              <Store className="text-blue-600 w-8 h-8 mb-2" />
              <span className="font-semibold text-gray-700">Comércio Local</span>
            </CardContent>
          </Card>
        </Link>

        <Link to="/mapa">
          <Card className="hover:shadow-lg cursor-pointer transition-shadow duration-200 ease-in-out">
            <CardContent className="flex flex-col items-center p-6">
              <MapPin className="text-red-600 w-8 h-8 mb-2" />
              <span className="font-semibold text-gray-700">Mapa da Região</span>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default Home;