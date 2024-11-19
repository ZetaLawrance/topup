import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Mlbb from "./pages/Mlbb";
import Codm from "./pages/Codm";
import Genshin from "./pages/Genshin";
import Hok from "./pages/Hok";
import Pubgm from "./pages/Pubgm";
import Valo from "./pages/Valorant";
import "./index.css";

function App() {
  return (
    <Router basename="/topup">  {/* Menambahkan base path */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/mlbb" element={<Mlbb />} />
        <Route path="/register" element={<Codm />} />
        <Route path="/genshin" element={<Genshin />} />\
        <Route path="/codm" element={<Hok />} />
        <Route path="/pubm " element={<Pubgm />} />
        <Route path="/valorant" element={<Valo />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
