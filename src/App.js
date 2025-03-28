import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Funcionario from "./pages/funcionarios";

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funcionario/:id" element={<Funcionario />} />
      </Routes>
    </Router>
  );
}

export default App;