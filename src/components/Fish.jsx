import React from "react"
import Axios from "axios"
import { Navigation } from "."
import "../styles/search.css"

function Fish() {
  let hideSearch = false
  let hideSpecies = false
  let hidePersonality = false
  let info = null
  const getFish = () => {
    Axios.get("https://acnhapi.com/v1/fish").then((response) => {
      displayInfo(response.data)
      info = response.data
    })
  }
  const searchFish = () => {
    displaySearchInfo(info)
  }
  function displayInfo(data) {
    document.getElementById("fish").innerHTML = ""
    for (let character in data) {
      displayFish(data[character])
    }
  }
  function hideStuff(value) {
    switch (value) {
      case "name":
        hideSearch = false
        hidePersonality = false
        hideSpecies = false
        break
      case "species":
        hideSearch = true
        hidePersonality = false
        hideSpecies = true
        break
      case "personality":
        hideSearch = true
        hidePersonality = true
        hideSpecies = false
        break
      default:
        break
    }
  }
  function displaySearchInfo(data) {
    document.getElementById("fish").innerHTML = ""
    let search = document.getElementById("fishSearch").value
    for (let character in data) {
      let c = data[character].name["name-USen"].toLowerCase()
      if (c.includes(search.toLowerCase())) {
        displayFish(data[character])
      }
    }
  }
  function displayFish(data) {
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
    newI.setAttribute("class", "fishImage")
    newI.setAttribute("alt", "Image of " + data.name["name-USen"])
    newI.setAttribute("style", "background-color: white !important")

    //Build front of card
    const newF = document.createElement("div")
    newF.appendChild(newI)
    newF.setAttribute("id", data.name["name-USen"] + "Figure")
    newF.setAttribute("class", "fishCardFront")
    //Build front of card caption
    const newFigC = document.createElement("h2")
    newFigC.innerHTML =
      data.name["name-USen"].charAt(0).toUpperCase() +
      data.name["name-USen"].slice(1)
    newFigC.setAttribute("id", data.name["name-USen"] + "Name")
    newF.appendChild(newFigC)
    //Build front of card personality caption
    const newP = document.createElement("h2")
    newP.innerHTML = "Price: " + data.price + " Bells"
    newP.setAttribute("id", data.name["name-USen"] + "Price")
    newP.setAttribute("class", "villagerP")
    newF.appendChild(newP)
    const newP5 = document.createElement("h4")
    newP5.setAttribute("id", data.name["name-USen"] + "Availability")

    if (data.availability.isAllYear) {
      newP5.innerHTML = "Availability: All Year, "
    } else {
      newP5.innerHTML =
        "Northern Availability (in months): " +
        data.availability["month-northern"] +
        ", Southern Availability (in months): " +
        data.availability["month-southern"] +
        ", "
    }
    if (data.availability.isAllDay) {
      newP5.innerHTML += "All Day"
    } else {
      newP5.innerHTML += "from " + data.availability.time
    }
    newF.appendChild(newP5)

    //Build back of card
    const newB = document.createElement("div")
    newB.setAttribute(
      "style",
      "background: url(" + data.icon_uri + ") no-repeat center"
    )
    newB.setAttribute("class", "cardBack")

    const newP2 = document.createElement("h4")
    newP2.setAttribute("id", data.name["name-USen"] + "BackName")
    newP2.innerHTML = "Name: " + data.name["name-USen"]
    newB.appendChild(newP2)

    const newP3 = document.createElement("h4")
    newP3.setAttribute("id", data.name["name-USen"] + "Shadow")
    newP3.innerHTML = "Shadow Size: " + data.shadow
    newB.appendChild(newP3)

    const newP4 = document.createElement("h4")
    newP4.setAttribute("id", data.name["name-USen"] + "CjPrice")
    newP4.innerHTML = "Cj's Price: " + data["price-cj"] + " Bells"
    newB.appendChild(newP4)

    const newP6 = document.createElement("h4")
    newP6.setAttribute("id", data.name["name-USen"] + "BackName")
    newP6.setAttribute("style", "margin-top: 125px")
    newP6.innerHTML = "Catch Phrase When Caught: " + data["catch-phrase"]
    newB.appendChild(newP6)

    newInner.appendChild(newF)
    newInner.appendChild(newB)
    newCard.appendChild(newInner)

    document.getElementById("fish").appendChild(newCard)
  }
  getFish()
  return (
    <div id="searchDiv" className="Search min-vh-100">
      <Navigation />
      <div className="container">
        <div className="row align-items-center my-5">
          <div id="searchTitle" className="col-lg-12">
            <h1 id="searchHeader">Fish Search</h1>
            <p id="searchPar">
              Hover over a Fish to view its information. You can also use the
              search bar to search for a fish by name
            </p>
          </div>
        </div>
        <div className="row align-items-center my-5">
          <div id="searchBarCol" className="col-lg-12">
            <input
              type="text"
              id="fishSearch"
              placeholder="Search for a specific fish..."
            />
            <button onClick={searchFish} id="searchButton">
              Search
            </button>
          </div>
        </div>
        <div className="row align-items-center my-5">
          <div className="col-lg-12">
            <section id="fish"></section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fish
