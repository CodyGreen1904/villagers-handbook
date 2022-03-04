import React, { useEffect } from "react";
import Axios from "axios";
import { Navigation } from "../components";
import "../styles/about.css";

function About() {
  const vId1 = 61;
  const vId2 = 372;
  const vId3 = 267;

  const getVillager1 = () => {
    Axios.get("https://acnhapi.com/v1/villagers/61").then((response) => {
      displayVillager(response.data, vId1);
    });
  };
  const getVillager2 = () => {
    Axios.get("https://acnhapi.com/v1/villagers/372").then((response) => {
      displayVillager(response.data, vId2);
    });
  };
  const getVillager3 = () => {
    Axios.get("https://acnhapi.com/v1/villagers/267").then((response) => {
      displayVillager(response.data, vId3);
    });
  };

  function displayVillager(info, vId) {
    const vImg = document.createElement("img");
    vImg.setAttribute("id", "villagerImg");
    vImg.setAttribute("src", info.image_uri);
    vImg.setAttribute("alt", "Image of " + info.name["name-USen"]);
    const vFig = document.createElement("figure");
    vFig.appendChild(vImg);
    vFig.setAttribute("id", "villagerFigure");
    const vFigCap = document.createElement("figcaption");
    vFigCap.innerHTML = info.name["name-USen"];
    vFigCap.setAttribute("id", "villagerName");
    vFig.appendChild(vFigCap);
    if (vId === 61) {
      document.getElementById("villager1").appendChild(vFig);
    } else if (vId === 372) {
      document.getElementById("villager2").appendChild(vFig);
    } else {
      document.getElementById("villager3").appendChild(vFig);
    }
  }

  useEffect(() => {
    getVillager1();
    getVillager2();
    getVillager3();
  }, []);

  return (
    <div id="aboutDiv" className="about min-vh-100">
      <Navigation />
      <div className="container">
        <div id="aboutText" className="col-lg-5">
          <h1 id="aboutTitle">About Us</h1>
          <div id="bubble">
            <p>
              The Villager's Handook is a place to learn about all of the
              fascinating residents of Animal Crossing: New Horizons. This
              dashboard was created by Cody Green, Sammi King, and Matthew
              Berzinskas. Our decision to create this dashboard came from our
              love of video games and the magical worlds that have emerged from
              them.
            </p>
          </div>
        </div>
      </div>
      <div id="villCards" className="container px-3">
        <div id="villCards2" className="row gx-3">
          <div className="col-md-4 border-0 card-container">
            <div id="cards" className="p-3 card-flip">
              <div id="villager2" className="card-front">
                <p id="cardText">Cody's Favorite Villager</p>
              </div>
              <div className="card-back">
                <p className="aboutInfo">Name: Cody Green</p>
                <p className="aboutInfo">Species: Human</p>
                <p className="aboutInfo">Hobby: Video Games</p>
                <p className="aboutInfo">Personality: Cranky</p>
                <p className="aboutInfo">Saying: "Am I Me???"</p>
                <p className="aboutInfo">email: greencod@pdx.edu</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 border-0 card-container">
            <div id="cards" className="p-3 card-flip">
              <div id="villager1" className="card-front">
                <p id="cardText">Sammi's Favorite Villager</p>
              </div>
              <div className="card-back">
                <p className="aboutInfo">Name: Samantha (Sammi) King</p>
                <p className="aboutInfo">Species: Human</p>
                <p className="aboutInfo">Hobby: Hooping</p>
                <p className="aboutInfo">Personality: Peppy</p>
                <p className="aboutInfo">Saying: "Be here now." -Ram Dass</p>
                <p className="aboutInfo">email: samaki2@pdx.edu</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 border-0 card-container">
            <div id="cards" className="p-3 card-flip">
              <div id="villager3" className="card-front">
                <p id="cardText">Matthew's Favorite Villager</p>
              </div>
              <div className="card-back">
                <p className="aboutInfo">Name: Matt Berzinskas</p>
                <p className="aboutInfo">Species: Kangaroo</p>
                <p className="aboutInfo">Hobby: Walking</p>
                <p className="aboutInfo">Personality: Cranky</p>
                <p className="aboutInfo">
                  Saying: "A house without either a cat or a dog is a sad house
                  indeed"
                </p>
                <p className="aboutInfo">email: mberz2@pdx.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
