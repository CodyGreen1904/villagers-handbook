import React from "react"
import Axios from "axios"
import { Navigation } from "../components"
import "../styles/search.css"

function Search() {
  let hideSearch = false
  let hideSpecies = false
  let hidePersonality = false
  let info = null
  const getVillagers = () => {
    Axios.get("https://acnhapi.com/v1/villagers").then((response) => {
      displayInfo(response.data)
      info = response.data
    })
  }
  const searchVillagers = () => {
    displaySearchInfo(info)
  }
  const searchSpecies = () => {
    displaySpecies(info)
  }
  const searchPersonality = () => {
    displayPersonality(info)
  }

  function displayInfo(data) {
    document.getElementById("villagers").innerHTML = ""
    for (let character in data) {
      //Build the outer card
      const newCard = document.createElement("div")
      newCard.setAttribute("id", data[character].name["name-USen"] + "Card")
      newCard.setAttribute("class", "card")
      //Build inner card
      const newInner = document.createElement("div")
      newInner.setAttribute(
        "id",
        data[character].name["name-USen"] + "InnerCard"
      )
      newInner.setAttribute("class", "innerCard")
      //Build Character Image
      const newI = document.createElement("img")
      newI.setAttribute("id", data[character].name["name-USen"] + "Img")
      newI.setAttribute("src", data[character].image_uri)
      newI.setAttribute("alt", "Image of " + data[character].name["name-USen"])

      //Build front of card
      const newF = document.createElement("div")
      newF.appendChild(newI)
      newF.setAttribute("id", data[character].name["name-USen"] + "Figure")
      newF.setAttribute("class", "cardFront")
      //Build front of card caption
      const newFigC = document.createElement("h2")
      newFigC.innerHTML = data[character].name["name-USen"]
      newFigC.setAttribute("id", data[character].name["name-USen"] + "Name")
      newF.appendChild(newFigC)
      //Build front of card personality caption
      const newP = document.createElement("p")
      newP.innerHTML = data[character].personality
      newP.setAttribute("id", data[character].name["name-USen"] + "Title")
      newP.setAttribute("class", "villagerP")
      newF.appendChild(newP)

      //Build back of card
      const newB = document.createElement("div")
      newB.setAttribute(
        "style",
        "background: url(" + data[character].icon_uri + ") no-repeat center"
      )
      newB.setAttribute("class", "cardBack")

      const newP2 = document.createElement("h4")
      newP2.setAttribute("id", data[character].name["name-USen"] + "BackName")
      newP2.innerHTML = "Name: " + data[character].name["name-USen"]
      newB.appendChild(newP2)

      const newP3 = document.createElement("h4")
      newP3.setAttribute("id", data[character].name["name-USen"] + "Species")
      newP3.innerHTML = "Species: " + data[character].species
      newB.appendChild(newP3)

      const newP4 = document.createElement("h4")
      newP4.setAttribute(
        "id",
        data[character].name["name-USen"] + "Backpersonality"
      )
      newP4.innerHTML = "Personality: " + data[character].personality
      newB.appendChild(newP4)

      const newP5 = document.createElement("h4")
      newP5.setAttribute(
        "id",
        data[character].name["name-USen"] + "Catchphrase"
      )
      newP5.setAttribute("style", "margin-top: 125px")
      newP5.innerHTML = "Birthday: " + data[character]["birthday-string"]
      newB.appendChild(newP5)

      const newP6 = document.createElement("h4")
      newP6.setAttribute("id", data[character].name["name-USen"] + "BackName")
      newP6.innerHTML = "Catch Phrase: " + data[character]["catch-phrase"]
      newB.appendChild(newP6)

      newInner.appendChild(newF)
      newInner.appendChild(newB)
      newCard.appendChild(newInner)

      document.getElementById("villagers").appendChild(newCard)
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
    document.getElementById("villagers").innerHTML = ""
    let search = document.getElementById("villagerSearch").value
    for (let character in data) {
      let c = data[character].name["name-USen"].toLowerCase()
      if (c.includes(search.toLowerCase())) {
        //Build the outer card
        const newCard = document.createElement("div")
        newCard.setAttribute("id", data[character].name["name-USen"] + "Card")
        newCard.setAttribute("class", "card")
        //Build inner card
        const newInner = document.createElement("div")
        newInner.setAttribute(
          "id",
          data[character].name["name-USen"] + "InnerCard"
        )
        newInner.setAttribute("class", "innerCard")
        //Build Character Image
        const newI = document.createElement("img")
        newI.setAttribute("id", data[character].name["name-USen"] + "Img")
        newI.setAttribute("src", data[character].image_uri)
        newI.setAttribute(
          "alt",
          "Image of " + data[character].name["name-USen"]
        )

        //Build front of card
        const newF = document.createElement("div")
        newF.appendChild(newI)
        newF.setAttribute("id", data[character].name["name-USen"] + "Figure")
        newF.setAttribute("class", "cardFront")
        //Build front of card caption
        const newFigC = document.createElement("h2")
        newFigC.innerHTML = data[character].name["name-USen"]
        newFigC.setAttribute("id", data[character].name["name-USen"] + "Name")
        newF.appendChild(newFigC)
        //Build front of card personality caption
        const newP = document.createElement("p")
        newP.innerHTML = data[character].personality
        newP.setAttribute("id", data[character].name["name-USen"] + "Title")
        newP.setAttribute("class", "villagerP")
        newF.appendChild(newP)

        //Build back of card
        const newB = document.createElement("div")
        newB.setAttribute(
          "style",
          "background: url(" + data[character].icon_uri + ") no-repeat center"
        )
        newB.setAttribute("class", "cardBack")

        const newP2 = document.createElement("h4")
        newP2.setAttribute("id", data[character].name["name-USen"] + "BackName")
        newP2.innerHTML = "Name: " + data[character].name["name-USen"]
        newB.appendChild(newP2)

        const newP3 = document.createElement("h4")
        newP3.setAttribute("id", data[character].name["name-USen"] + "Species")
        newP3.innerHTML = "Species: " + data[character].species
        newB.appendChild(newP3)

        const newP4 = document.createElement("h4")
        newP4.setAttribute(
          "id",
          data[character].name["name-USen"] + "Backpersonality"
        )
        newP4.innerHTML = "Personality: " + data[character].personality
        newB.appendChild(newP4)

        const newP5 = document.createElement("h4")
        newP5.setAttribute(
          "id",
          data[character].name["name-USen"] + "Catchphrase"
        )
        newP5.setAttribute("style", "margin-top: 125px")
        newP5.innerHTML = "Birthday: " + data[character]["birthday-string"]
        newB.appendChild(newP5)

        const newP6 = document.createElement("h4")
        newP6.setAttribute("id", data[character].name["name-USen"] + "BackName")
        newP6.innerHTML = "Catch Phrase: " + data[character]["catch-phrase"]
        newB.appendChild(newP6)

        newInner.appendChild(newF)
        newInner.appendChild(newB)
        newCard.appendChild(newInner)

        document.getElementById("villagers").appendChild(newCard)
      }
    }
  }
  function displaySpecies(data) {
    document.getElementById("villagers").innerHTML = ""
    let search = document.getElementById("speciesSelect").value
    for (let character in data) {
      let c = data[character].species
      if (c.includes(search)) {
        //Build the outer card
        const newCard = document.createElement("div")
        newCard.setAttribute("id", data[character].name["name-USen"] + "Card")
        newCard.setAttribute("class", "card")
        //Build inner card
        const newInner = document.createElement("div")
        newInner.setAttribute(
          "id",
          data[character].name["name-USen"] + "InnerCard"
        )
        newInner.setAttribute("class", "innerCard")
        //Build Character Image
        const newI = document.createElement("img")
        newI.setAttribute("id", data[character].name["name-USen"] + "Img")
        newI.setAttribute("src", data[character].image_uri)
        newI.setAttribute(
          "alt",
          "Image of " + data[character].name["name-USen"]
        )

        //Build front of card
        const newF = document.createElement("div")
        newF.appendChild(newI)
        newF.setAttribute("id", data[character].name["name-USen"] + "Figure")
        newF.setAttribute("class", "cardFront")
        //Build front of card caption
        const newFigC = document.createElement("h2")
        newFigC.innerHTML = data[character].name["name-USen"]
        newFigC.setAttribute("id", data[character].name["name-USen"] + "Name")
        newF.appendChild(newFigC)
        //Build front of card personality caption
        const newP = document.createElement("p")
        newP.innerHTML = data[character].personality
        newP.setAttribute("id", data[character].name["name-USen"] + "Title")
        newP.setAttribute("class", "villagerP")
        newF.appendChild(newP)

        //Build back of card
        const newB = document.createElement("div")
        newB.setAttribute(
          "style",
          "background: url(" + data[character].icon_uri + ") no-repeat center"
        )
        newB.setAttribute("class", "cardBack")

        const newP2 = document.createElement("h4")
        newP2.setAttribute("id", data[character].name["name-USen"] + "BackName")
        newP2.innerHTML = "Name: " + data[character].name["name-USen"]
        newB.appendChild(newP2)

        const newP3 = document.createElement("h4")
        newP3.setAttribute("id", data[character].name["name-USen"] + "Species")
        newP3.innerHTML = "Species: " + data[character].species
        newB.appendChild(newP3)

        const newP4 = document.createElement("h4")
        newP4.setAttribute(
          "id",
          data[character].name["name-USen"] + "Backpersonality"
        )
        newP4.innerHTML = "Personality: " + data[character].personality
        newB.appendChild(newP4)

        const newP5 = document.createElement("h4")
        newP5.setAttribute(
          "id",
          data[character].name["name-USen"] + "Catchphrase"
        )
        newP5.setAttribute("style", "margin-top: 125px")
        newP5.innerHTML = "Birthday: " + data[character]["birthday-string"]
        newB.appendChild(newP5)

        const newP6 = document.createElement("h4")
        newP6.setAttribute("id", data[character].name["name-USen"] + "BackName")
        newP6.innerHTML = "Catch Phrase: " + data[character]["catch-phrase"]
        newB.appendChild(newP6)

        newInner.appendChild(newF)
        newInner.appendChild(newB)
        newCard.appendChild(newInner)

        document.getElementById("villagers").appendChild(newCard)
      }
    }
  }
  function displayPersonality(data) {
    document.getElementById("villagers").innerHTML = ""
    let search = document.getElementById("personalitySelect").value
    for (let character in data) {
      let c = data[character].personality
      if (c.includes(search)) {
        //Build the outer card
        const newCard = document.createElement("div")
        newCard.setAttribute("id", data[character].name["name-USen"] + "Card")
        newCard.setAttribute("class", "card")
        //Build inner card
        const newInner = document.createElement("div")
        newInner.setAttribute(
          "id",
          data[character].name["name-USen"] + "InnerCard"
        )
        newInner.setAttribute("class", "innerCard")
        //Build Character Image
        const newI = document.createElement("img")
        newI.setAttribute("id", data[character].name["name-USen"] + "Img")
        newI.setAttribute("src", data[character].image_uri)
        newI.setAttribute(
          "alt",
          "Image of " + data[character].name["name-USen"]
        )

        //Build front of card
        const newF = document.createElement("div")
        newF.appendChild(newI)
        newF.setAttribute("id", data[character].name["name-USen"] + "Figure")
        newF.setAttribute("class", "cardFront")
        //Build front of card caption
        const newFigC = document.createElement("h2")
        newFigC.innerHTML = data[character].name["name-USen"]
        newFigC.setAttribute("id", data[character].name["name-USen"] + "Name")
        newF.appendChild(newFigC)
        //Build front of card personality caption
        const newP = document.createElement("p")
        newP.innerHTML = data[character].personality
        newP.setAttribute("id", data[character].name["name-USen"] + "Title")
        newP.setAttribute("class", "villagerP")
        newF.appendChild(newP)

        //Build back of card
        const newB = document.createElement("div")
        newB.setAttribute(
          "style",
          "background: url(" + data[character].icon_uri + ") no-repeat center"
        )
        newB.setAttribute("class", "cardBack")

        const newP2 = document.createElement("h4")
        newP2.setAttribute("id", data[character].name["name-USen"] + "BackName")
        newP2.innerHTML = "Name: " + data[character].name["name-USen"]
        newB.appendChild(newP2)

        const newP3 = document.createElement("h4")
        newP3.setAttribute("id", data[character].name["name-USen"] + "Species")
        newP3.innerHTML = "Species: " + data[character].species
        newB.appendChild(newP3)

        const newP4 = document.createElement("h4")
        newP4.setAttribute(
          "id",
          data[character].name["name-USen"] + "Backpersonality"
        )
        newP4.innerHTML = "Personality: " + data[character].personality
        newB.appendChild(newP4)

        const newP5 = document.createElement("h4")
        newP5.setAttribute(
          "id",
          data[character].name["name-USen"] + "Catchphrase"
        )
        newP5.setAttribute("style", "margin-top: 125px")
        newP5.innerHTML = "Birthday: " + data[character]["birthday-string"]
        newB.appendChild(newP5)

        const newP6 = document.createElement("h4")
        newP6.setAttribute("id", data[character].name["name-USen"] + "BackName")
        newP6.innerHTML = "Catch Phrase: " + data[character]["catch-phrase"]
        newB.appendChild(newP6)

        newInner.appendChild(newF)
        newInner.appendChild(newB)
        newCard.appendChild(newInner)

        document.getElementById("villagers").appendChild(newCard)
      }
    }
  }
  getVillagers()
  return (
    <div id="searchDiv" className="Search min-vh-100">
      <Navigation />
      <div className="container">
        <div className="row align-items-center my-5">
          <div id="searchTitle" className="col-lg-12">
            <h1 id="searchHeader">Villager Search</h1>
            <p id="searchPar">
              Click on a Villager to view their information. You can also use
              the dropdown to select a category, or the search bar to search for
              a villager by name
            </p>
          </div>
        </div>
        <div className="row align-items-center my-5">
          <div id="searchBarCol" className="col-lg-12">
            <input
              hidden={hideSearch}
              type="text"
              id="villagerSearch"
              placeholder="Search for a specific villager..."
            />
            <select
              name="species"
              id="speciesSelect"
              onChange={searchSpecies}
              hidden={hideSpecies}
            >
              <option value="" selected>
                Select a species
              </option>
              <option value="Alligator">Alligators</option>
              <option value="Anteater">Anteaters</option>
              <option value="Bear">Bears</option>
              <option value="Bird">Birds</option>
              <option value="Bull">Bulls</option>
              <option value="Cat">Cats</option>
              <option value="Chicken">Chickens</option>
              <option value="Cow">Cows</option>
              <option value="Cub">Cubs</option>
              <option value="Deer">Deer</option>
              <option value="Dog">Dogs</option>
              <option value="Duck">Ducks</option>
              <option value="Eagle">Eagles</option>
              <option value="Elephant">Elephants</option>
              <option value="Frog">Frogs</option>
              <option value="Goat">Goats</option>
              <option value="Gorilla">Gorillas</option>
              <option value="Hamster">Hamsters</option>
              <option value="Hippo">Hippos</option>
              <option value="Horse">Horses</option>
              <option value="Kangaroo">Kangaroos</option>
              <option value="Koala">Koalas</option>
              <option value="Lion">Lions</option>
              <option value="Monkey">Monkeys</option>
              <option value="Mouse">Mice</option>
              <option value="Octopus">Octopi</option>
              <option value="Ostrich">Ostriches</option>
              <option value="Penguin">Penguins</option>
              <option value="Pig">Pigs</option>
              <option value="Rabbit">Rabbits</option>
              <option value="Rhino">Rhinos</option>
              <option value="Sheep">Sheep</option>
              <option value="Squirrel">Squirells</option>
              <option value="Tiger">Tigers</option>
              <option value="Wolf">Wolves</option>
            </select>
            <select
              name="personality"
              onChange={searchPersonality}
              id="personalitySelect"
              hidden={hidePersonality}
            >
              <option value="" selected>
                Select a Personality
              </option>
              <option value="Cranky">Cranky</option>
              <option value="Jock">Jock</option>
              <option value="Lazy">Lazy</option>
              <option value="Normal">Normal</option>
              <option value="Peppy">Peppy</option>
              <option value="Uchi">Uchi</option>
              <option value="Smug">Smug</option>
              <option value="Snooty">Snooty</option>
            </select>
            <button
              hidden={hideSearch}
              onClick={searchVillagers}
              id="searchButton"
            >
              Search
            </button>
            <button
              hidden={!hideSearch}
              onClick={hideStuff("name")}
              id="nameButton"
            >
              Search by Name
            </button>
            <button
              hidden={hideSpecies}
              onClick={hideStuff("species")}
              id="speciesButton"
            >
              Search by Species
            </button>
            <button
              hidden={hidePersonality}
              onClick={hideStuff("personality")}
              id="personalityButton"
            >
              Search by Personality
            </button>
          </div>
        </div>
        <div className="row align-items-center my-5">
          <div className="col-lg-12">
            <section id="villagers"></section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
