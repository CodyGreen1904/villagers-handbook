import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/welcome.css";
import title from "../img/backdrop_text.png";
import ReactCardFlip from "react-card-flip";

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
      isFlipped: false
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
            villagers_loaded: true
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
      return (
        <img
          className="img-responsive"
          alt="Villagers Handbook Logo"
          src={title}
        />
      );
    }

    function Villager(state) {
      let max = state.villagers.length;
      return (
        <img
          alt="Random Villager"
          src={state.villagers[Math.floor(Math.random() * max)].image_uri}
        />
      );
    }

    function VillagerBack() {
      return (
        <div id="villager_back">
          <p> Text </p>
        </div>
      );
    }

    function Icon(state) {
      let max = state.villagers.length;
      return (
        <img
          id="villager_front"
          alt="Random Villager Icon"
          src={state.villagers[Math.floor(Math.random() * max)].icon_uri}
        />
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
      <div className="homepage">
        <div className="container">
          <div className="row">
            <div id="title" className="col col-md-8 col-xs-12 text-center">
              <Logo />
              <div className="col col-xs-12">
                <p id="intro" className="lead">
                  Villagers Handbook is a lightweight search application that
                  allows you to quickly and easily look up information related
                  to the world of Animal Crossing New Horizons.
                </p>
                <Link to="/villagers">
                  <button className="btn">Enter</button>
                </Link>
              </div>
            </div>
            <div id="villager" className="col col-xs-12 col-md-4">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <Villager villagers={this.state.villagers} />
                  </div>
                  <div class="flip-card-back">
                    <VillagerBack />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="icon_container" className="row">
            <div className="col col-12">
              <Icon villagers={this.state.villagers} />
              <Icon villagers={this.state.villagers} />
              <Icon villagers={this.state.villagers} />
              <Icon villagers={this.state.villagers} />
              <Icon villagers={this.state.villagers} />
              <Icon villagers={this.state.villagers} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
