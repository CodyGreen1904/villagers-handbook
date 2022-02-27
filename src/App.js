import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import PageNotFound from "./components/PageNotFound";
import "./index.css";

//Routing imports
import { Footer, Home, About, Villagers, Fossils, Fish } from "./components";

export default function App() {
  const [villagers, setVillagers] = useState([]);
  const [fossils, setFossils] = useState([]);
  const [fish, setFish] = useState([]);
  const [loadState, setLoadState] = useState(false);

  const fetchVillagers = async () => {
    if (!loadState) {
      console.log("App: Retrieving Villagers from API");
      axios.get(`https://acnhapi.com/v1/villagers/`).then((res) => {
        setVillagers(res.data);
        setLoadState(true);
      });
    }
  };

  const fetchFossils = async () => {
    console.log("App: Retrieving Fossils from API");
    axios.get(`https://acnhapi.com/v1/fossils/`).then((res) => {
      setVillagers(res.data);
      setLoadState(true);
    });
  };

  const fetchFish = async () => {
    console.log("App: Retrieving Fish from API");
    axios.get(`https://acnhapi.com/v1/fish/`).then((res) => {
      setVillagers(res.data);
      setLoadState(true);
    });
  };

  useEffect(() => {
    fetchVillagers();
  }, []);

  return (
    <div>
      {loadState ? (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home state={villagers} fetchVillagers={fetchVillagers} />
              }
            />
            <Route path="/about" element={<About state={villagers} />} />
            <Route
              path="/villagers"
              element={<Villagers state={villagers} />}
            />
            <Route path="/fossils" element={<Fossils state={fossils} />} />
            <Route path="/fish" element={<Fish state={fish} />} />
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
