import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { MapPin, Store, TreePalm } from "lucide-react";

import Home from "./pages/Home";
import Turismo from "./pages/Turismo";
import TurismoDetalhe from "./pages/TurismoDetalhe";
import Comercio from "./pages/Comercio";
import Mapa from "./pages/Mapa";

export default function App() {
  return (
    <Router>
      <nav className="bg-blue-600 p-4 text-white flex justify-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/turismo" className="hover:underline">Turismo</Link>
        <Link to="/comercio" className="hover:underline">Comércio Local</Link>
        <Link to="/mapa" className="hover:underline">Mapa da Região</Link>
      </nav>

      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/turismo" element={<Turismo />} />
          <Route path="/atracoes/:id" element={<TurismoDetalhe />} />
          <Route path="/comercio" element={<Comercio />} />
          <Route path="/mapa" element={<Mapa />} />
        </Routes>
      </div>
    </Router>
  );
}
// Forçar deploy limpo