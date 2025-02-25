import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import SobreMim from "./pages/sobreMim";
import Experiencias from "./pages/experiencias";
import Habilidades from "./pages/habilidades";
import Formacao from "./pages/formacao";
import Contato from "./pages/contato";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/sobreMim" />} />
        <Route path="/sobreMim" element={<SobreMim />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/formacao" element={<Formacao />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
