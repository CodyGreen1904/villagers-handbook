import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/welcome.css";
import title from "../img/backdrop_text.png";
import background from "../img/bg_blue.jpg";
import axios from "axios";

export default function Home(props) {
  let [main, setMain] = useState();
  let [others, setOthers] = useState([]);

  const [villagers, setVillagers] = useState([]);
  const [fossils, setFossils] = useState([]);
  const [fish, setFish] = useState([]);
  const [loadState, setLoadState] = useState(false);

  const fetchVillagers = async () => {
    console.log("App: Retrieving Villagers from API");
    axios.get(`https://acnhapi.com/v1/villagers/`).then((res) => {
      setVillagers(res.data);
      setLoadState(true);
    });
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
    if (!loadState && props.data) {
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
    <div className="homepage">
      <div className="container">
        <div className="row">
          {/** Title Section */}
          <div id="title" className="col col-md-8 col-xs-12 text-center">
            <img
              className="img-responsive"
              alt="Villagers Handbook Logo"
              src={title}
            />
            <div className="col col-xs-12">
              <p id="intro" className="lead">
                Villagers Handbook is a lightweight search application that
                allows you to quickly and easily look up information related to
                the world of Animal Crossing New Horizons.
              </p>
              <button className="btn">Enter</button>
            </div>
          </div>
          <div id="villager" className="col col-xs-12 col-md-4">
            {main ? (
              <img alt="Random Villager" src={main.image_uri} />
            ) : (
              "Loading..."
            )}
          </div>
        </div>

        {/** Icon Container Section */}
        <div id="icon_container" className="row">
          <div className="col col-xs-6 col-md-4">Icon 1</div>
          <div className="col col-xs-6 col-md-4">Icon 2</div>
          <div className="col col-xs-6 col-md-4">Icon 3</div>
          <div className="col col-xs-6 col-md-4">Icon 4</div>
          <div className="col col-xs-6 col-md-4">Icon 5</div>
          <div className="col col-xs-6 col-md-4">Icon 6</div>
        </div>
      </div>
    </div>
    /*    <main
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "../img/tom.png"})`
      }}
    >
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
    </main> */
  );
}
