import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/topup/" element={<HomePage />} />
          <Route path="/topup/login" element={<Login />} />
          <Route path="/topup/register" element={<Register />} />
        </Routes>
    </Router>
  );
}

export default App;
