import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/welcome.css";

function Home() {
  let url = "http://acnhapi.com/v1/";
  let route = "villagers/";
  let id = "57";

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(url + route + id).then((response) => {
      console.log(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <div class="villager_container d-block mx-lg-auto"></div>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">
            Welcome to the Villagers Handbook
          </h1>
          <p class="lead">
            Villagers Handbook is a lightweight search application that allows
            you to quickly and easily look up information related to the world
            of Animal Crossing New Horizons.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Enter Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
