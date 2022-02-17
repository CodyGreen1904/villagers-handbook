import React from "react"
import Axios from "axios"
import logo from "../img/Logo.png"
import { Navigation } from "../components"

function Search() {
  const getVillagers = () => {
    Axios.get("https://acnhapi.com/v1/villagers").then((response) => {
      console.log(response)
    })
  }
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
            <button onClick={getVillagers}>Get Villagers</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
