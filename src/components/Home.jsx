import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/welcome.css";
import uuid from "react-uuid";

//Generates random numbers for API call
function randomUniqueIntegers(total, quantity) {
  const numbers = Array(total)
    .fill(null)
    .map((_, i) => i + 1);

  return numbers
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, quantity);
}

export default function Home() {
  let url = "https://acnhapi.com/v1/villagers/";

  let [main, setMain] = useState();
  let [others, setOthers] = useState([]);
  let [endPoints, setEndPoints] = useState([]);
  let MAX = 391;

  useEffect(() => {
    //Get main villager to display
    //Pulls "Raymond"
    axios({
      method: "GET",
      url: `${url}64`
    })
      .then((response) => {
        setMain(response.data);
        //console.log(JSON.stringify(main.id, null, 3));
      })
      .catch((error) => {
        console.log(error);
      });

    //Get random villagers to display
    //Pulls 6 random numbers from 1-MAX( currently 391)
    let nums = randomUniqueIntegers(MAX, 6);
    console.log(nums);
    for (const num of nums) {
      let endPoint = url + num;
      //console.log(endPoint);
      setEndPoints([...endPoints, endPoint]);
      //console.log(endPoints);
    }

    axios.all(
      endPoints.map((endpoint) =>
        axios({
          method: "GET",
          url: endpoint
        })
          .then((response) => {
            setOthers((others) => [...others, response.data]);
          })
          .catch((error) => {
            console.log(error);
          })
      )
    );
  }, []);

  //console.log(JSON.stringify(others.name, null, 3));

  return (
    <main>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-lg-6">
            <div className="villager_container d-block mx-auto">
              {main ? (
                <img alt="Villager Raymond" src={main.image_uri} />
              ) : (
                "Loading..."
              )}
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <h1 id="title" className="display-5 fw-bold lh-1">
              Welcome to the Villagers Handbook!
            </h1>
            <p id="intro" className="lead">
              Villagers Handbook is a lightweight search application that allows
              you to quickly and easily look up information related to the world
              of Animal Crossing New Horizons.
            </p>
            <div className="btn-group-vertical">
              <Link to="/villagers">
                <button type="button" className="btn btn-primary btn-lg">
                  Enter Site
                </button>
              </Link>
              <Link to="/about">
                <button type="button" className="btn btn-primary btn-lg">
                  About Us
                </button>
              </Link>
            </div>
          </div>
          <div className="container icon_container">
            <div className="row">
              <div className="lists-wrapper">
                {/*                 {Object.keys(others).map((key) => (
                  <div key={uuid()} className="col col-sm">
                    <img alt="Random Villager" src={others[key].icon_uri} />
                  </div>
                ))} */}
              </div>
              <div className="col col-sm">
                {others[0] ? (
                  <img alt="Random Villager" src={others[0].icon_uri} />
                ) : (
                  "..."
                )}
              </div>

              <div className="col col-sm">
                {others[1] ? (
                  <img alt="Random Villager" src={others[1].icon_uri} />
                ) : (
                  "..."
                )}
              </div>

              <div className="col col-sm">
                {others[2] ? (
                  <img alt="Random Villager" src={others[2].icon_uri} />
                ) : (
                  "..."
                )}
              </div>

              <div className="col col-sm">
                {others[3] ? (
                  <img alt="Random Villager" src={others[3].icon_uri} />
                ) : (
                  "..."
                )}
              </div>

              <div className="col col-sm">
                {others[4] ? (
                  <img alt="Random Villager" src={others[4].icon_uri} />
                ) : (
                  "..."
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
