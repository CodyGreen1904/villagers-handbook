import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageNotFound from "./components/PageNotFound";
import "./index.css";

//Routing imports
import {
  Navigation,
  Footer,
  Home,
  About,
  Villagers,
  Fossils,
  Fish
} from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/villagers" element={<Villagers />} />
      <Route path="/about" element={<About />} />
      <Route path="/fossils" element={<Fossils />} />
      <Route path="/fish" element={<Fish />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
