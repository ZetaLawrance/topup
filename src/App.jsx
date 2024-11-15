import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Mlbb from "./pages/mlbb";
import "./index.css";

function App() {
  return (
    <Router basename="/topup">  {/* Menambahkan base path */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mlbb" element={<Mlbb />} />
      </Routes>
    </Router>
  );
}

export default App;
