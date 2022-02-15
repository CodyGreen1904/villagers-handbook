import React from "react";
import { Link } from "react-router-dom";
import "../styles/welcome.css";

function Home() {
  return (
    <div className="home" id="welcome_page">
      {/*CENTERED PAGE ENTRY*/}
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

        <div className="btn-group-vertical">
          <div className="row row-margin-05">
            <Link to="/search">
              <button className="btn btn-primary">Enter Site</button>
            </Link>
          </div>
          <div className="row row-margin-05">
            <Link to="/about">
              <button className="btn btn-primary">About Us</button>
            </Link>
          </div>
        </div>
      </div>
      {/*END PAGE ENTRY*/}
    </div>
  );
}

export default Home;
