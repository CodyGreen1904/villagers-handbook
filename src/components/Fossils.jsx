import React from "react"
import Axios from "axios"
import { Navigation } from "."
import sad from "../img/sadisabelle.png"
import "../styles/search.css"

function Fossils() {
  let info = null
  const getFossils = () => {
    Axios.get("https://acnhapi.com/v1/fossils").then((response) => {
      displayInfo(response.data)
      info = response.data
    })
  }
  const checkEnter = (event) => {
    if (event.code == "Enter") {
      searchFossils()
    }
  }
  const searchFossils = () => {
    displaySearchInfo(info)
    const test = document.getElementById("fossils")
    if (test.innerHTML == "") {
      const newCard = document.createElement("div")
      newCard.setAttribute("class", "card")
      newCard.setAttribute("style", "background-color: white !important")

      const newP = document.createElement("p")
      newP.innerHTML = "No Results"
      newP.setAttribute("class", "villagerP")

      const newI = document.createElement("img")
      newI.setAttribute("id", "sadIsabelleImg")
      newI.setAttribute("src", sad)
      newI.setAttribute("alt", "Image of sad Isabelle")
      newI.setAttribute("style", "margin-left: 9px")
      newCard.appendChild(newP)
      newCard.appendChild(newI)
      test.appendChild(newCard)
    }
  }

  function displayInfo(data) {
    document.getElementById("fossils").innerHTML = ""
    for (let character in data) {
      displayFossil(data[character])
    }
  }
  function displaySearchInfo(data) {
    document.getElementById("fossils").innerHTML = ""
    let search = document.getElementById("fossilSearch").value
    for (let character in data) {
      let c = data[character].name["name-USen"].toLowerCase()
      if (c.includes(search.toLowerCase())) {
        displayFossil(data[character])
      }
    }
  }
  function displayFossil(data) {
    //Build the outer card
    const newCard = document.createElement("div")
    newCard.setAttribute("id", data.name["name-USen"] + "Card")
    newCard.setAttribute("class", "card")
    //Build inner card
    const newInner = document.createElement("div")
    newInner.setAttribute("id", data.name["name-USen"] + "InnerCard")
    newInner.setAttribute("class", "innerCard")
    //Build Character Image
    const newI = document.createElement("img")
    newI.setAttribute("id", data.name["name-USen"] + "Img")
    newI.setAttribute("src", data.image_uri)
    newI.setAttribute("alt", "Image of " + data.name["name-USen"])
    newI.setAttribute("class", "fossilImage")

    //Build front of card
    const newF = document.createElement("div")
    newF.appendChild(newI)
    newF.setAttribute("id", data.name["name-USen"] + "Figure")
    newF.setAttribute("class", "fossilCardFront")
    //Build front of card caption
    const newFigC = document.createElement("h2")
    newFigC.innerHTML =
      data.name["name-USen"].charAt(0).toUpperCase() +
      data.name["name-USen"].slice(1)
    newFigC.setAttribute("id", data.name["name-USen"] + "Name")
    newF.appendChild(newFigC)

    const newP = document.createElement("p")
    newP.setAttribute("id", data.name["name-USen"] + "Price")
    newP.setAttribute("class", "villagerP")
    newP.innerHTML = "Price: " + data.price + " Bells"
    newF.appendChild(newP)

    //Build back of card
    const newB = document.createElement("div")
    newB.setAttribute(
      "style",
      "background: url(" + data.icon_uri + ") no-repeat center"
    )
    newB.setAttribute("class", "cardBack")

    const newP2 = document.createElement("h4")
    newP2.setAttribute("id", data.name["name-USen"] + "BackName")
    newP2.innerHTML =
      "Name: " +
      data.name["name-USen"].charAt(0).toUpperCase() +
      data.name["name-USen"].slice(1)
    newB.appendChild(newP2)

    const newP4 = document.createElement("p")
    newP4.setAttribute("id", data.name["name-USen"] + "BackMuseum")
    newP4.innerHTML = data["museum-phrase"]
    newB.appendChild(newP4)

    newInner.appendChild(newF)
    newInner.appendChild(newB)
    newCard.appendChild(newInner)

    document.getElementById("fossils").appendChild(newCard)
  }
  getFossils()
  return (
    <div id="searchDiv" className="Search min-vh-100">
      <Navigation />
      <div className="container">
        <div className="row align-items-center my-5">
          <div id="fossilTitle" className="col-lg-12">
            <h1 id="searchHeader">Fossil Search</h1>
            <p id="searchPar">
              Hover over a Fossil to view its information. You can also use the
              search bar to search for a fossil by name
            </p>
          </div>
        </div>
        <div className="row align-items-center my-5">
          <div id="searchBarCol" className="col-lg-12">
            <input
              onKeyUp={checkEnter}
              type="text"
              id="fossilSearch"
              placeholder="Search for a specific fossill..."
            />
            <button onClick={searchFossils} id="searchButton">
              Search
            </button>
          </div>
        </div>
        <div className="row align-items-center my-5">
          <div className="col-lg-12">
            <section id="fossils"></section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fossils
