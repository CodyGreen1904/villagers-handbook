import React from "react";
import { Navigation } from "../components";
import "../styles/about.css";

function About() {
  return (
    <div id="aboutDiv" className="about min-vh-100">
      <Navigation />
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">About</h1>
            <p>
              The Villager's Handook is a place to learn about all of the fascinating residents of Animal Crossing: New Horizons. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
