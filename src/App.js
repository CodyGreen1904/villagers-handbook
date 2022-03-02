import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageNotFound from "./components/PageNotFound";
import "./styles/index.css";

//Routing imports
import { Footer, Home, About, Villagers, Fossils, Fish } from "./components";

export default function App() {

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
{/*         <Footer /> */}
      </Router>
    </div>
  );
}
