import React from "react";
import { Link } from "react-router-dom";
import background from "./img/bg_island.jpg";
import '../styles/welcome.css';

function Home() {
  return (
    <div className="home" id="welcome_page">
      {/*CENTERED PAGE ENTRY*/}
      <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

        <Link to="/about">
          <button class="btn btn-primary" to="/search">
            Enter Site
          </button>
        </Link>
      </div>
      {/*END PAGE ENTRY*/}
    </div>
  );
}

export default Home;
