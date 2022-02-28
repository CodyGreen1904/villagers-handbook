import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/welcome.css";
import title from "../img/vhtext_white.png";
import backdrop from "../img/backdrop_text.png";

export default function Home(props) {
  let [main, setMain] = useState();
  let [others, setOthers] = useState([]);
  let [loadState, setLoadState] = useState(false);

  useEffect(() => {
    if (!loadState) {
      console.log("Loading initial data...");
      //Convert data to an array
      let data = Object.keys(props.state).map(function (i) {
        return props.state[i];
      });

      console.log(data);
      //Get the size of the database
      let max = data.length;
      console.log(max);

      //Retrieve a random item from the array
      const selected = data[Math.floor(Math.random() * max)];

      //let selected = Object.keys(props.state).slice(0, max);
      console.log(selected);
      setMain(selected);
      setOthers([
        data[Math.floor(Math.random() * max)],
        data[Math.floor(Math.random() * max)],
        data[Math.floor(Math.random() * max)],
        data[Math.floor(Math.random() * max)],
        data[Math.floor(Math.random() * max)]
      ]);

      setLoadState(true);
    }
  }, []);

  return (
    <main id="homepage">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-lg-6">
            <div className="villager_container d-block mx-auto">
              {main ? (
                <img alt="Villager Raymond" src={main.image_uri} />
              ) : (
                "Loading..."
              )}
            </div>
          </div>

          <div className="title_container col-lg-6 text-center">
            <img alt="wood sign" className="title-box" src={backdrop} />
            {/*             <img alt="Title text" className="title" src={title} /> */}
            <p id="intro" className="lead">
              Villagers Handbook is a lightweight search application that allows
              you to quickly and easily look up information related to the world
              of Animal Crossing New Horizons.
            </p>
            <div className="btn-group-vertical">
              <Link to="/villagers">
                <button type="button" className="btn btn-primary btn-lg">
                  Enter Site
                </button>
              </Link>
              <Link to="/about">
                <button type="button" className="btn btn-primary btn-lg">
                  About Us
                </button>
              </Link>
            </div>
          </div>
          <div className="container icon_container">
            <div className="row">
              <div className="lists-wrapper"></div>
              <div className="col col-sm">
                {others[0] ? (
                  <img alt="Random Villager" src={others[0].icon_uri} />
                ) : (
                  "..."
                )}
              </div>

              <div className="col col-sm">
                {others[1] ? (
                  <img alt="Random Villager" src={others[1].icon_uri} />
                ) : (
                  "..."
                )}
              </div>

              <div className="col col-sm">
                {others[2] ? (
                  <img alt="Random Villager" src={others[2].icon_uri} />
                ) : (
                  "..."
                )}
              </div>

              <div className="col col-sm">
                {others[3] ? (
                  <img alt="Random Villager" src={others[3].icon_uri} />
                ) : (
                  "..."
                )}
              </div>

              <div className="col col-sm">
                {others[4] ? (
                  <img alt="Random Villager" src={others[4].icon_uri} />
                ) : (
                  "..."
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
