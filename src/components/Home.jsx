import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import title from "../img/title.png";
import blathers from "../img/blathers.png";

/**
 * Glass component for application homepage.
 * Calls to the ANCH API and renders different imagery based
 * on the currently selected user theme. Adjusts routing to
 * inner pages based on the selected theme.
 */
class Home extends React.Component {
  _isMounted = false;

  /**
   * Constructor for the class component.
   * Sets default state and sets default page theme.
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      villagerCards: [],
      villagerIcons: [],
      villagerLoaded: false,

      fossilCards: [],
      fossilIcons: [],
      fossilLoaded: false,

      fishCards: [],
      fishIcons: [],
      fishLoaded: false,

      //Max as of March-2022
      villagerMax: 391,
      fossilMax: 56,
      fishMax: 79,

      currentCards: [],
      currentIcons: [],

      theme: "villagers"
    };
  }

  /**
   * Method to generate a random number.
   * Returns a number contained in a user defined max.
   * @param {int} max Max number.
   */
  randNum(max) {
    return Math.floor(Math.random() * max);
  }

  /**
   * Fetches data when the component mounts.
   */
  async componentDidMount() {
    let localStorageTheme = localStorage.getItem("theme");
    this.state.theme = localStorageTheme;

    this._isMounted = true;
    if (this._isMounted) {
      this.fetchData(this.state.theme);
      let localStorageTheme = localStorage.getItem("theme");
      if (localStorageTheme !== null) {
        document.body.className = `theme_${localStorageTheme}`;
      } else {
        document.body.className = `theme_villagers`;
      }
    }
  }

  /**
   * Handles action on component updates.
   */
  componentDidUpdate() {}

  /**
   * Asynchronous method for handling data. Takes the
   * user defined tag and fetches from the API based
   * on the parameter. Sets the state accordingly.
   * @param {String} tag
   */
  async fetchData(tag) {
    console.log("Loading " + tag);
    let urls = [];
    switch (tag) {
      case "villagers":
        if (!this.state.villagerLoaded) {
          for (let i = 0; i < 8; ++i) {
            urls.push(
              `https://acnhapi.com/v1/${tag}/${this.randNum(
                this.state.villagerMax
              )}`
            );
          }

          try {
            const response = await Promise.all(
              urls.map((url) => fetch(url).then((res) => res.json()))
            );

            this.setState({
              villagerCards: response.slice(0, 2),
              villagerIcons: response.slice(2),
              currentCards: response.slice(0, 2),
              currentIcons: response.slice(2),
              villagerLoaded: true,
              theme: "villagers"
            });
            localStorage.setItem("theme", "villagers");
          } catch (error) {
            console.log("Error", error);
          }
        }
        break;
      case "fish":
        if (!this.state.fishLoaded) {
          for (let i = 0; i < 8; ++i) {
            urls.push(
              `https://acnhapi.com/v1/${tag}/${this.randNum(
                this.state.fishMax
              )}`
            );
          }

          try {
            const response = await Promise.all(
              urls.map((url) => fetch(url).then((res) => res.json()))
            );

            this.setState({
              fishCards: response.slice(0, 2),
              fishIcons: response.slice(2),
              currentCards: response.slice(0, 2),
              currentIcons: response.slice(2),
              fishLoaded: true,
              theme: "fish"
            });
            localStorage.setItem("theme", "fish");
          } catch (error) {
            console.log("Error", error);

            return (
              <div>
                <h1> Loading.... </h1>{" "}
              </div>
            );
          }
        }
        break;
      case "fossils":
        console.log("Loading " + tag);
        try {
          fetch("https://acnhapi.com/v1/fossils/")
            .then((response) => response.json())
            .then((data) => {
              data = Object.keys(data).map(function (k) {
                return data[k];
              });

              let rand = [];
              for (let i = 0; i < 7; ++i) {
                rand.push(this.randNum(this.state.fossilMax));
              }

              this.setState({
                fossilCards: [data[rand[0]], data[rand[1]]],
                fossilIcons: [
                  data[rand[2]],
                  data[rand[3]],
                  data[rand[4]],
                  data[rand[5]],
                  data[rand[6]]
                ],
                currentCards: [data[rand[0]], data[rand[1]]],
                currentIcons: [
                  data[rand[2]],
                  data[rand[3]],
                  data[rand[4]],
                  data[rand[5]],
                  data[rand[6]]
                ],
                fossilLoaded: true,
                theme: "fossils"
              });
              localStorage.setItem("theme", "fossils");
            });
        } catch (error) {
          console.log("Error", error);
        }
        break;
      default:
        break;
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  /**
   * Changes the theme according to user defined tag.
   * @param {String} newTheme
   */
  changeTheme(newTheme) {
    document.body.classList.remove(`theme_${this.state.theme}`);
    document.body.classList.add(`theme_${newTheme}`);
    this.setState({ theme: newTheme });

    switch (newTheme) {
      case "villagers":
        console.log(`Switching theme to ${newTheme}`);
        if (this.state.villagerLoaded) {
          console.log("Setting state to villagers.");
          this.setState({
            currentCards: this.state.villagerCards,
            currentIcons: this.state.villagerIcons
          });
        } else {
          console.log("Calling to fetch...");
          this.fetchData("villagers");
        }
        localStorage.setItem("theme", "villagers");
        break;
      case "fish":
        console.log(`Switching theme to ${newTheme}`);
        if (this.state.fishLoaded) {
          console.log("Setting state to fish.");
          this.setState({
            currentCards: this.state.fishCards,
            currentIcons: this.state.fishIcons
          });
        } else {
          console.log("Calling to fetch...");
          this.fetchData("fish");
        }
        localStorage.setItem("theme", "fish");
        break;
      case "fossils":
        console.log(`Switching theme to ${newTheme}`);
        if (this.state.fossilLoaded) {
          console.log("Setting state to fossils.");
          this.setState({
            currentCards: this.state.fossilCards,
            currentIcons: this.state.fossilIcons
          });
        } else {
          console.log("Calling to fetch...");
          this.fetchData("fossils");
        }
        localStorage.setItem("theme", "fossils");
        break;
      default:
        break;
    }
  }

  /**
   * Method for returning a conditional link based on
   * the current theme.
   */
  conditionalLink() {
    return `/${this.state.theme}`;
  }

  /**
   * Rendering of the page.
   */
  render() {
    function Logo() {
      return <img className="img-fluid" src={title} alt="Villagers HandBook" />;
    }

    /* Returns a different element based on the theme */
    function Card(props) {
      switch (props.tag) {
        case "villagers":
          return <Villager villager={props.currentCards[props.pos]} />;
        case "fish":
          return <Fish fish={props.currentCards[props.pos]} />;
        case "fossils":
          return <Fossil fossil={props.currentCards[props.pos]} />;
        default:
          break;
      }
    }

    /* Basic villager card */
    function Villager(state) {
      if (villagerLoaded) {
        return (
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                <img
                  className="img-fluid rounded"
                  src={state.villager.image_uri}
                  alt="Random Villager"
                />
              </div>
              <div className="back">
                <div className="back_card">
                  <VillagerBack villager={state.villager} />
                </div>
              </div>
            </div>
          </div>
        );
      } else return null;
    }

    /* Back of the villager card */
    function VillagerBack(state) {
      return (
        <div className="container-fluid">
          <p>Name: {state.villager.name["name-USen"]}</p>
          <p>Species: {state.villager.species}</p>
          <p>Gender: {state.villager.gender}</p>
          <p>Personality: {state.villager.personality}</p>
          <img src={state.villager.icon_uri} alt="Villager Icon" />
          <p>Species: {state.villager.species}</p>
          <p>Catch Phrase: {state.villager["catch-phrase"]}</p>
        </div>
      );
    }

    /* Basic fish card */
    function Fish(state) {
      return (
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <div id="fish_card">
                <img
                  className="img-fluid rounded mt-lg-4"
                  src={state.fish.icon_uri}
                  alt="Random Fish"
                />
              </div>
            </div>
            <div className="back">
              <div className="back_card">
                <FishBack fish={state.fish} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    /* Back of the fish card */
    function FishBack(state) {
      if (fishLoaded) {
        return (
          <div className="container-fluid">
            <p>Name: {state.fish.name["name-USen"]}</p>
            <img src={state.fish.image_uri} alt="Villager Icon" />
            <p>Availabile (n): {state.fish.availability["month-northern"]}</p>
            <p>Availabile (s): {state.fish.availability["month-southern"]}</p>
            <p>Available in: {state.fish.availability.location}</p>
            <p>Rarity: {state.fish.availability.rarity}</p>
            <p>Price: {state.fish.price}</p>
            <p>Catch Phrase:{state.fish["catch-phrase"]} </p>
            <p>Museum Phrase: {state.fish["museum-phrase"]}</p>
          </div>
        );
      } else return null;
    }

    /* Basic fossil card */
    function Fossil(state) {
      if (fossilLoaded) {
        return (
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                <img
                  id="fossil_front"
                  className="img-fluid rounded"
                  src={blathers}
                  alt="Random Fossil"
                />
              </div>
              <div className="back">
                <div className="back_card">
                  <FossilBack fossil={state.fossil} />
                </div>
              </div>
            </div>
          </div>
        );
      } else return null;
    }

    /* Back of the fossil card */
    function FossilBack(state) {
      if (fossilLoaded) {
        return (
          <div id="fossil_back" className="container-fluid">
            <p>Name: {state.fossil.name["name-USen"]}</p>
            <img alt="Random Fossil" src={state.fossil.image_uri} />
            <p>Price: {state.fossil.price}</p>
            <p>Museum Phrase: {state.fossil["museum-phrase"]}</p>
          </div>
        );
      } else return null;
    }

    function Icon(props) {
      let img_src;
      props.tag === "fossils"
        ? (img_src = props.current.image_uri)
        : (img_src = props.current.icon_uri);

      return (
        <div id="icon" className="col-4 col-sm-2">
          <img
            className="img-fluid rounded mx-auto"
            alt="Random Icon"
            src={img_src}
          />
        </div>
      );
    }

    /* Checks if any data is loaded */
    const { villagerLoaded, fishLoaded, fossilLoaded } = this.state;
    if (!villagerLoaded && !fishLoaded && !fossilLoaded)
      return (
        <div>
          <h1> Loading.... </h1>{" "}
        </div>
      );

    return (
      <div
        id="homepage"
        className="border d-flex 
          align-items-center 
          justify-content-center 
          mt-auto
          min-vh-100"
      >
        <div className="container text-center">
          <div className="row d-flex align-items-center justify-content-around">
            <div
              id="title"
              className="col col-12 col-md-6 col-lg-6 order-lg-2 order-md-1 order-first"
            >
              <Logo />
            </div>

            <div
              id="card_big"
              /* Not visible on smaller than large. */
              className="col col-lg-3 d-none d-lg-block order-lg-3 order-md-3 card_container"
            >
              <Card
                currentCards={this.state.currentCards}
                tag={this.state.theme}
                pos="0"
              />
            </div>

            <div
              id="card_big"
              className="col col-7 col-md-6 col-lg-3 order-lg-1 order-md-1 order-3 card_container"
            >
              <Card
                currentCards={this.state.currentCards}
                tag={this.state.theme}
                pos="1"
              />
            </div>

            <div
              id="intro"
              className="col col-8 col-md-6 align-self-center order-md-4"
            >
              <p>
                Villagers Handbook is a lightweight search application that
                allows you to quickly and easily look up information related to
                the world of Animal Crossing New Horizons.
              </p>
            </div>

            <div
              id="enter"
              className="col col-6 col-md-5 m-2 align-self-center order-md-5 order-2"
            >
              <Link to={this.conditionalLink()}>
                <button type="button" className="btn btn-secondary">
                  Get Started
                </button>
              </Link>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="change_theme"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Change Theme
                </button>
                <ul
                  className="dropdown-menu text-center"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <button
                      id="drop_btn"
                      className=""
                      onClick={() => this.changeTheme("villagers")}
                    >
                      Villagers
                    </button>
                  </li>
                  <li>
                    <button
                      id="drop_btn"
                      className=""
                      onClick={() => this.changeTheme("fossils")}
                    >
                      Fossils
                    </button>
                  </li>
                  <li>
                    <button
                      id="drop_btn"
                      className=""
                      onClick={() => this.changeTheme("fish")}
                    >
                      Fish
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id="icon_container"
            className="row justify-content-center p-4 mt-2"
          >
            <Icon current={this.state.currentIcons[0]} tag={this.state.theme} />
            <Icon current={this.state.currentIcons[1]} tag={this.state.theme} />
            <Icon current={this.state.currentIcons[2]} tag={this.state.theme} />
            <Icon current={this.state.currentIcons[3]} tag={this.state.theme} />
            <Icon current={this.state.currentIcons[4]} tag={this.state.theme} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
