import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App";

//Routing imports
import { Navigation, Footer, Home } from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Placeholder1 />} />
      <Route path="/" element={<Placeholder2 />} />
      <Route path="/" element={<Placeholder3 />}>
        <Route path="" element={<Placeholder5 />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>
);
