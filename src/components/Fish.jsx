import React from "react"
import Axios from "axios"
import { Navigation } from "."
import sad from "../img/sadisabelle.png"
import "../styles/search.css"

function Fish() {
  let info = null
  const getFish = () => {
    Axios.get("https://acnhapi.com/v1/fish").then((response) => {
      displayInfo(response.data)
      info = response.data
    })
  }
  const checkEnter = (event) => {
    if (event.code === "Enter") {
      searchFish()
    }
  }
  const nameClick = () => {
    displayInfo(info)
    const searchDiv = document.getElementById("fishSearch")
    const availabilityDiv = document.getElementById("availabilitySelect")
    const searchButton = document.getElementById("searchButton")
    const nameButton = document.getElementById("nameButton")
    const availabilityNButton = document.getElementById("speciesButton")
    const availabilitySButton = document.getElementById("personalityButton")
    searchDiv.value = ""
    availabilityDiv.value = ""
    searchDiv.hidden = false
    availabilityDiv.hidden = true
    searchButton.hidden = false
    nameButton.hidden = true
    availabilityNButton.hidden = false
    availabilitySButton.hidden = false
  }
  const searchAvailability = () => {
    let search = document.getElementById("availabilitySelect").value
    if (search == "") {
      displayInfo(info)
      return
    }
    const availabilityNButton = document.getElementById("speciesButton")
    if (availabilityNButton.hidden == true) {
      displayNorthernAvailability(info)
    } else {
      displaySouthernAvailability(info)
    }
  }
  const availabilitySClick = () => {
    displayInfo(info)
    const searchDiv = document.getElementById("fishSearch")
    const availabilityDiv = document.getElementById("availabilitySelect")
    const searchButton = document.getElementById("searchButton")
    const nameButton = document.getElementById("nameButton")
    const availabilityNButton = document.getElementById("speciesButton")
    const availabilitySButton = document.getElementById("personalityButton")
    searchDiv.value = ""
    availabilityDiv.value = ""
    searchDiv.hidden = true
    availabilityDiv.hidden = false
    searchButton.hidden = true
    nameButton.hidden = false
    availabilityNButton.hidden = false
    availabilitySButton.hidden = true
  }
  const availabilityNClick = () => {
    displayInfo(info)
    const searchDiv = document.getElementById("fishSearch")
    const availabilityDiv = document.getElementById("availabilitySelect")
    const searchButton = document.getElementById("searchButton")
    const nameButton = document.getElementById("nameButton")
    const availabilityNButton = document.getElementById("speciesButton")
    const availabilitySButton = document.getElementById("personalityButton")
    searchDiv.value = ""
    availabilityDiv.value = ""
    searchDiv.hidden = true
    availabilityDiv.hidden = false
    searchButton.hidden = true
    nameButton.hidden = false
    availabilityNButton.hidden = true
    availabilitySButton.hidden = false
  }
  function displayNorthernAvailability(data) {
    document.getElementById("fish").innerHTML = ""
    let search = document.getElementById("availabilitySelect").value
    for (let character in data) {
      if (data[character].availability.isAllYear) {
        displayFish(data[character])
      } else {
        let timeN = data[character].availability["month-northern"].split("-")
        let comp = parseInt(search)
        let timeN0 = parseInt(timeN[0])
        let timeN1 = parseInt(timeN[1])
        if (timeN1 - timeN0 < 0 && (comp >= timeN0 || comp <= timeN1)) {
          displayFish(data[character])
        } else if (comp >= timeN0 && comp <= timeN1) {
          displayFish(data[character])
        }
      }
    }
  }
  function displaySouthernAvailability(data) {
    document.getElementById("fish").innerHTML = ""
    let search = document.getElementById("availabilitySelect").value
    for (let character in data) {
      if (data[character].availability.isAllYear) {
        displayFish(data[character])
      } else {
        let timeS = data[character].availability["month-southern"].split("-")
        let comp = parseInt(search)
        let timeS0 = parseInt(timeS[0])
        let timeS1 = parseInt(timeS[1])
        if (timeS1 - timeS0 < 0 && (comp >= timeS0 || comp <= timeS1)) {
          displayFish(data[character])
        } else if (comp >= timeS0 && comp <= timeS1) {
          displayFish(data[character])
        }
      }
    }
  }
  const searchFish = () => {
    displaySearchInfo(info)
    const test = document.getElementById("fish")
    if (test.innerHTML === "") {
      const newCard = document.createElement("div")
      newCard.setAttribute("class", "card")
      newCard.setAttribute("id", "sadddd")
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
  const alphabeticalOrder = () => {
    var parent = document.getElementById("fish")
    if (parent.firstChild.id == "sadddd") {
      displayInfo(info)
    }
    let toSort = document.getElementById("fish").children
    toSort = Array.prototype.slice.call(toSort, 0)

    toSort.sort(function (a, b) {
      var aord = a.id.split("-")[0]
      var bord = b.id.split("-")[0]
      if (aord.toLowerCase() < bord.toLowerCase()) {
        return -1
      } else {
        return 1
      }
    })

    parent = document.getElementById("fish")
    parent.innerHTML = ""

    for (var i = 0; i < toSort.length; i++) {
      parent.append(toSort[i])
    }
  }
  function priceLowOrder() {
    var parent = document.getElementById("fish")
    if (parent.firstChild.id == "sadddd") {
      displayInfo(info)
    }
    let toSort = document.getElementById("fish").children
    toSort = Array.prototype.slice.call(toSort, 0)

    toSort.sort(function (a, b) {
      var aord = a.getElementsByClassName("innerCard")
      aord = aord[0].getElementsByClassName("fishCardFront")
      aord = aord[0].getElementsByClassName("villagerP")
      var bord = b.getElementsByClassName("innerCard")
      bord = bord[0].getElementsByClassName("fishCardFront")
      bord = bord[0].getElementsByClassName("villagerP")
      let p1 = aord[0].textContent.split(" ")
      let p2 = bord[0].textContent.split(" ")
      let p11 = parseInt(p1[1])
      let p22 = parseInt(p2[1])
      if (p11 < p22) {
        return -1
      } else {
        return 1
      }
    })

    parent = document.getElementById("fish")
    parent.innerHTML = ""

    for (var i = 0; i < toSort.length; i++) {
      parent.append(toSort[i])
    }
  }
  function priceHighOrder() {
    var parent = document.getElementById("fish")
    if (parent.firstChild.id == "sadddd") {
      displayInfo(info)
    }
    let toSort = document.getElementById("fish").children
    toSort = Array.prototype.slice.call(toSort, 0)

    toSort.sort(function (a, b) {
      var aord = a.getElementsByClassName("innerCard")
      aord = aord[0].getElementsByClassName("fishCardFront")
      aord = aord[0].getElementsByClassName("villagerP")
      var bord = b.getElementsByClassName("innerCard")
      bord = bord[0].getElementsByClassName("fishCardFront")
      bord = bord[0].getElementsByClassName("villagerP")
      let p1 = aord[0].textContent.split(" ")
      let p2 = bord[0].textContent.split(" ")
      let p11 = parseInt(p1[1])
      let p22 = parseInt(p2[1])
      if (p11 < p22) {
        return 1
      } else {
        return -1
      }
    })

    parent = document.getElementById("fish")
    parent.innerHTML = ""

    for (var i = 0; i < toSort.length; i++) {
      parent.append(toSort[i])
    }
  }
  function displayInfo(data) {
    document.getElementById("fish").innerHTML = ""
    for (let character in data) {
      displayFish(data[character])
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
    newCard.setAttribute("id", data.name["name-USen"] + "-Card")
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
      let timeN = data.availability["month-northern"].split("-")
      let timeS = data.availability["month-southern"].split("-")
      let m = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ]
      let northStr =
        m[parseInt(timeN[0]) - 1] + " - " + m[parseInt(timeN[1]) - 1]
      let southStr =
        m[parseInt(timeS[0]) - 1] + " - " + m[parseInt(timeS[1]) - 1]
      newP5.innerHTML =
        "Northern Availability: " +
        northStr +
        ", Southern Availability: " +
        southStr +
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

    const newP3 = document.createElement("h5")
    newP3.setAttribute("id", data.name["name-USen"] + "Shadow")
    newP3.innerHTML = "Shadow Size: " + data.shadow
    newB.appendChild(newP3)

    const newP4 = document.createElement("h5")
    newP4.setAttribute("id", data.name["name-USen"] + "CjPrice")
    newP4.innerHTML = "Cj's Price: " + data["price-cj"] + " Bells"
    newB.appendChild(newP4)

    const newP6 = document.createElement("h5")
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
          <div id="fishTitle" className="col-lg-12">
            <h1 id="searchHeader">Fish Search</h1>
            <p id="searchPar">
              Hover over a Fish to view its information. You can also use the
              search bar to search for a fish by name
            </p>
          </div>
        </div>
        <div className="row align-items-center my-5">
          <div id="searchBarCol" className="col-lg-12">
            <label htmlFor="alphabeticalButton">Order By: </label>
            <button onClick={alphabeticalOrder} id="alphabeticalOrderButton">
              Name
            </button>
            <button onClick={priceLowOrder} id="priceLowOrderButton">
              Price (Low to High)
            </button>
            <button onClick={priceHighOrder} id="priceHighOrderButton">
              Price (High to Low)
            </button>
            <input
              onKeyUp={checkEnter}
              type="text"
              id="fishSearch"
              placeholder="Search for a specific fish..."
            />
            <button onClick={searchFish} id="searchButton">
              Search
            </button>
            <select
              hidden={true}
              name="availability"
              onChange={searchAvailability}
              id="availabilitySelect"
            >
              <option value="" defaultValue>
                Select a Month
              </option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <button hidden={true} onClick={nameClick} id="nameButton">
              Search by Name
            </button>
            <button onClick={availabilityNClick} id="speciesButton">
              Search by Northern Availability
            </button>
            <button onClick={availabilitySClick} id="personalityButton">
              Search by Southern Availability
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
