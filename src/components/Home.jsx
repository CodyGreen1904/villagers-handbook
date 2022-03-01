import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import title from "../img/backdrop_text.png";

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
            randomVillager: result[Math.floor(Math.random() * result.length)]
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
      return <img alt="Random Villager" src={state.villager.image_uri} />;
    }

    function VillagerBack(state) {
      return (
        <div id="villager_back">
          <p>Name: {state.villager.name["name-USen"]}</p>
          <p>Species: {state.villager.species}</p>
          <p>Personality: {state.villager.personality}</p>
          <img src={state.villager.icon_uri} alt="Villager Icon" />
          <p>Birthday: {state.villager["birthday-string"]}</p>
          <p>Catchphrase: {state.villager.saying}</p>
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
      <div id="homepage">
        <div className="container-fluid text-center">
          <div className="row">
            <div id="logo_container" className="col col-12 col-md-7">
              <Logo />

              <div id="intro">
                Villagers Handbook is a lightweight search application that
                allows you to quickly and easily look up information related to
                the world of Animal Crossing New Horizons.
              </div>

              <Link to="/villagers">
                <button className="btn">Enter</button>
              </Link>
            </div>
            <div id="villager" className="col col-12 col-lg-5 col-md-5">
              <div className="card_container">
                <div id="cards" className="card_flip">
                  <div className="card_front">
                    <Villager villager={this.state.randomVillager} />
                  </div>
                  <div className="card_back">
                    <VillagerBack villager={this.state.randomVillager} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="icon_container" className="row">
            <div className="col col-10">
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
