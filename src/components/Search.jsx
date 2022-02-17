import React from "react"
import Axios from "axios"
import { Navigation } from "../components"
import backgound from "../img/tom.png"

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
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Search</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type
            </p>
            <button onClick={getVillagers}>Get Villagers</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
