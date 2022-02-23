import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/welcome.css";

function Home() {
  let url = "http://acnhapi.com/v1/";
  let route = "villagers/";
  let id = "57";

  return (
    <main>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-12 col-lg-6">
            <div class="villager_container d-block mx-auto"></div>
          </div>

          <div class="col-lg-6 text-center">
            <h1 id="title" class="display-5 fw-bold lh-1">
              Welcome to the Villagers Handbook!
            </h1>
            <p id="intro" class="lead">
              Villagers Handbook is a lightweight search application that allows
              you to quickly and easily look up information related to the world
              of Animal Crossing New Horizons.
            </p>
            <div class="btn-group-vertical gap-2 col-8">
              <button type="button" class="btn btn-primary btn-lg">
                Enter Site
              </button>
              <button type="button" class="btn btn-primary btn-lg">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
