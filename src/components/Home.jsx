import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import title from "../img/title.png";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      villagers: [],
      villagers_loaded: false,
      fish: [],
      fish_loaded: false,
      fossils: [],
      fossils_loaded: false,
      max: 0,
      isFlipped: false,
      randomVillager: []
    };
  }

  fetchVillagers() {
    if (this.state.villagers_loaded === false) {
      console.log("Calling to villagers api...");
      fetch("https://acnhapi.com/v1/villagers/")
        .then((res) => res.json())
        .then((data) => {
          let result = Object.keys(data).map(function (k) {
            return data[k];
          });
          this.setState({
            max: result.length,
            villagers: result,
            villagers_loaded: true,
            randomVillager: [
              result[Math.floor(Math.random() * result.length)],
              result[Math.floor(Math.random() * result.length)]
            ]
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  componentDidMount() {
    this.fetchVillagers();
  }
  componentDidUpdate() {
    console.log("Update");
  }

  render() {
    function Logo() {
      return <img className="img-fluid" src={title} alt="Villagers HandBook" />;
    }

    function Villager(state) {
      return (
        <div
          class="card_flip_container"
          onTouchStart={(e) => {
            e.classList.toggle("hover");
          }}
        >
          <div className="card_flipper">
            <div className="card_front">
              <img
                className="img-fluid rounded mt-lg-5"
                src={state.villager.image_uri}
                alt="Random Villager"
              />
            </div>
            <div className="card_back">
              <VillagerBack villager={state.villager} />
            </div>
          </div>
        </div>
      );
    }

    function VillagerBack(state) {
      return (
        <div id="villager_back" class="container-fluid">
          <p>Name: {state.villager.name["name-USen"]}</p>
          <p>Species: {state.villager.species}</p>
          <p>Personality: {state.villager.personality}</p>
          <img src={state.villager.icon_uri} alt="Villager Icon" />
          <p>Birthday: {state.villager["birthday-string"]}</p>
          {/*           <p>Catchphrase: {state.villager.saying}</p> */}
        </div>
      );
    }

    function Icon(state) {
      let max = state.villagers.length;
      return (
        <div id="icon" class="col-2">
          <img
            class="img-fluid rounded mx-auto"
            alt="Random Villager Icon"
            src={state.villagers[Math.floor(Math.random() * max)].icon_uri}
          />
        </div>
      );
    }

    const { villagers_loaded } = this.state;
    if (!villagers_loaded)
      return (
        <div>
          <h1> Loading.... </h1>{" "}
        </div>
      );

    return (
      <div
        id="homepage"
        className="border d-flex align-items-center justify-content-center mt-auto"
      >
        <div className="container text-center">

          <div className="row d-flex align-items-center justify-content-around">
            <div
              id="title"
              class="col col-12 col-md-6 col-lg-6 order-lg-2 order-md-1 order-first"
            >
              <Logo />
            </div>

            <div
              id="villager"
              class="col col-lg-3 d-none d-lg-block order-lg-3 order-md-3"
            >
              <Villager villager={this.state.randomVillager[0]} />
            </div>

            <div
              id="villager"
              className="col col-12 col-md-6 col-lg-3 order-lg-1 order-md-1 order-3"
            >
              <Villager villager={this.state.randomVillager[1]} />
            </div>

            <div
              id="intro"
              class="col col-8 col-md-6 align-self-center order-md-4"
            >
              Villagers Handbook is a lightweight search application that allows
              you to quickly and easily look up information related to the world
              of Animal Crossing New Horizons.
            </div>

            <div
              id="enter"
              className="col col-6 col-md-5 m-2 align-self-center order-md-5 order-2"
            >
              <Link to="/villagers">
                <button type="button" className="btn btn-secondary">
                  Get Started
                </button>
              </Link>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Change Theme
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="icon_container" className="row justify-content-center">
            <Icon villagers={this.state.villagers} />
            <Icon villagers={this.state.villagers} />
            <Icon villagers={this.state.villagers} />
            <Icon villagers={this.state.villagers} />
            <Icon villagers={this.state.villagers} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
