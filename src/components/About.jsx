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
    <div id="aboutDiv" className="about">
      <Navigation />
      <div className="container">
        <div id="bubble">
          <div id="aboutText" className="col-lg-5">
            <h1 id="aboutTitle">About Us</h1>
            <p>
              This dashboard was created by Cody Green, Samantha King, and Matthew
              Berzinskas using the ACNH API. This is a project for CS 410P Front End Web Development at Portland State University. 
              Our decision to create this dashboard came from our
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
                <p className="aboutInfo">Name: <span className="fw-normal">Cody Green</span></p>
                <p className="aboutInfo">Species: <span className="fw-normal">Human</span></p>
                <p className="aboutInfo">Hobby: <span className="fw-normal">Video Games</span></p>
                <p className="aboutInfo">Personality: <span className="fw-normal">Cranky</span></p>
                <p className="aboutInfo">Saying: <span className="fw-normal">"Am I Me???"</span></p>
                <p className="aboutInfo">Email: <span className="fw-normal">greencod@pdx.edu</span></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 border-0 card-container">
            <div id="cards" className="p-3 card-flip">
              <div id="villager1" className="card-front">
                <p id="cardText">Sammi's Favorite Villager</p>
              </div>
              <div className="card-back">
                <p className="aboutInfo">Name: <span className="fw-normal">Samantha (Sammi) King</span></p>
                <p className="aboutInfo">Species: <span className="fw-normal">Human</span></p>
                <p className="aboutInfo">Hobby: <span className="fw-normal">Hooping</span></p>
                <p className="aboutInfo">Personality: <span className="fw-normal">Peppy</span></p>
                <p className="aboutInfo">Saying: <span className="fw-normal">"Nothing ventured, nothing gained."</span></p>
                <p className="aboutInfo">Email: <span className="fw-normal">samaki2@pdx.edu</span></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 border-0 card-container">
            <div id="cards" className="p-3 card-flip">
              <div id="villager3" className="card-front">
                <p id="cardText">Matt's Favorite Villager</p>
              </div>
              <div className="card-back">
                <p className="aboutInfo">Name: <span className="fw-normal">Matt Berzinskas</span></p>
                <p className="aboutInfo">Species: <span className="fw-normal">Kangaroo</span></p>
                <p className="aboutInfo">Hobby: <span className="fw-normal">Walking</span></p>
                <p className="aboutInfo">Personality: <span className="fw-normal">Cranky</span></p>
                <p className="aboutInfo">
                  Saying: <span className="fw-normal">"A house without either a cat or a dog is a sad house
                  indeed"</span>
                </p>
                <p className="aboutInfo">Email: <span className="fw-normal">mberz2@pdx.edu</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
