import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

//Routing imports
import {
  Navigation,
  Footer,
  Home,
  About,
  Villagers,
  Fossils,
  Fish,
} from "./components"

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/villagers" element={<Villagers />} />
      <Route path="/about" element={<About />} />
      <Route path="/fossils" element={<Fossils />} />
      <Route path="/fish" element={<Fish />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
)
