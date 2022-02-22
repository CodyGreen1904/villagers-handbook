import React from "react"
import Axios from "axios"
import { Navigation } from "../components"

function Search() {
  const getVillagers = () => {
    Axios.get("https://acnhapi.com/v1/villagers").then((response) => {
      console.log(response.data)
      displayInfo(response.data)
    })
  }
  function displayInfo(data) {
    document.getElementById("villagers").innerHTML = ""
    for (let character in data) {
      const newI = document.createElement("img")
      newI.setAttribute("id", data[character].name["name-USen"] + "Img")
      newI.setAttribute("src", data[character].image_uri)
      newI.setAttribute("alt", "Image of " + data[character].name["name-USen"])
      const newF = document.createElement("figure")
      newF.appendChild(newI)
      newF.setAttribute("id", data[character].name["name-USen"] + "Figure")
      const newFigC = document.createElement("figcaption")
      newFigC.innerHTML = data[character].name["name-USen"]
      newFigC.setAttribute("id", data[character].name["name-USen"] + "Name")
      newF.appendChild(newFigC)
      const newP = document.createElement("p")
      newP.innerHTML = data[character].personality
      newP.setAttribute("id", data[character].name["name-USen"] + "Title")
      newP.setAttribute("class", "villagerP")
      newF.appendChild(newP)
      document.getElementById("villagers").appendChild(newF)
    }
  }
  getVillagers()
  return (
    <div id="searchDiv" className="Search">
      <Navigation />
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-12">
            <h1 id="searchHeader" className="font-weight-light">
              Villager Search
            </h1>
            <p id="searchPar">
              Click on a Villager to view their information. You can also use
              the dropdown to select a category, or the search bar to search for
              a villager by name
            </p>
            <section id="villagers"></section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
