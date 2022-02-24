import React from "react";
import Axios from "axios";
import { Navigation } from "../components";
import "../styles/about.css";

function About() {
  const vId1 = 61;
  const vId2 = 372;
  const vId3 = 17;
  
  const getVillager1 = () => {
    Axios.get("https://acnhapi.com/v1/villagers/61").then((response) => {
      displayVillager(response.data, vId1)
    })
  }
  const getVillager2 = () => {
    Axios.get("https://acnhapi.com/v1/villagers/372").then((response) => {
      displayVillager(response.data, vId2)
    })
  }
  const getVillager3 = () => {
    Axios.get("https://acnhapi.com/v1/villagers/17").then((response) => {
      displayVillager(response.data, vId3)
    })
  }
          
  function displayVillager(info, vId) {
    const vImg = document.createElement("img");
    vImg.setAttribute("id", "villagerImg")
    vImg.setAttribute("src", info.image_uri)
    vImg.setAttribute("alt", "Image of " + info.name["name-USen"])
    const vFig = document.createElement("figure");
    vFig.appendChild(vImg)
    vFig.setAttribute("id", info.name["name-USen"] + "Figure")
    const vFigCap = document.createElement("figcaption")
    vFigCap.innerHTML = info.name["name-USen"]
    vFigCap.setAttribute("id", info.name["name-USen"] + "Name")
    vFig.appendChild(vFigCap)
    {/*
    const vPers = document.createElement("p")
    vPers.innerHTML = info.personality
    vPers.setAttribute("id", info.name["name-USen"] + "Title")
    vPers.setAttribute("class", "villagerP")
    vFigCap.appendChild(vPers)*/}
    if (vId === 61) {
      document.getElementById("villager1").appendChild(vFig)
    }
    else if (vId === 372){
      document.getElementById("villager2").appendChild(vFig)
    }
    else {
      document.getElementById("villager3").appendChild(vFig)
    }
  }

  getVillager1()
  getVillager2()
  getVillager3()

  return (
    <div id="aboutDiv" className="about min-vh-100">
      <Navigation />
      <div className="container">
        <div id="aboutText" className="col-lg-5">
          <h1 className="font-weight-light">About</h1>
          <p>
            The Villager's Handook is a place to learn about all of the fascinating residents of Animal Crossing: New Horizons. 
          </p>
        </div>
      </div>
      <div id="villCards" className="container px-3">
        <div className="row gx-5">
          <div className="col-sm-4 border-0">
            <div id="cards" className="p-3 border bg-light">
              <section id="villager1">
                <p id="cardText">Sammi's Favorite Villager</p>
              </section>
            </div>
          </div>
          <div className="col-sm-4 border-0">
            <div id="cards" className="p-3 border bg-light">
              <section id="villager2">
                <p id="cardText">Cody's Favorite Villager</p>
              </section>
            </div>
          </div>
          <div className="col-sm-4 border-0">
            <div id="cards" className="p-3 border bg-light">
              <section id="villager3">
                <p id="cardText">Matthew's Favorite Villager</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About;
    {/*
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          */}