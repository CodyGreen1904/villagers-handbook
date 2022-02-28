import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import PageNotFound from "./components/PageNotFound";
import "./index.css";

//Routing imports
import { Footer, Home, About, Villagers, Fossils, Fish } from "./components";

export default function App() {
  useEffect(() => {}, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/villagers" element={<Villagers />} />
          <Route path="/fossils" element={<Fossils />} />
          <Route path="/fish" element={<Fish />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
