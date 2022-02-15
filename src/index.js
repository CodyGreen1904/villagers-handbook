import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Routing imports
import { Navigation, Footer, Home } from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
    <Footer />
  </Router>
);
