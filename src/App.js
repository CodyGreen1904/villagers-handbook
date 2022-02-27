import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import PageNotFound from "./components/PageNotFound";
import "./index.css";

//Routing imports
import { Footer, Home, About, Villagers, Fossils, Fish } from "./components";

export default function App() {
  const [state, setState] = useState([]);
  const [loadState, setLoadState] = useState(false);

  const fetchData = async () => {
    if (!loadState) {
      console.log("App: Retrieving data from API");
      axios.get(`https://acnhapi.com/v1/villagers/`).then((res) => {
        setState(res.data);
        setLoadState(true);
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loadState ? (
        <Router>
          <Routes>
            <Route path="/" element={<Home state={state} />} />
            <Route path="/villagers" element={<Villagers />} />
            <Route path="/about" element={<About />} />
            <Route path="/fossils" element={<Fossils />} />
            <Route path="/fish" element={<Fish />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
