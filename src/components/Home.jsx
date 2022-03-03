import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import title from "../img/title.png";
class Home extends React.Component {
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
      fishMax: 80,

      currentCards: [],
      currentIcons: [],

      theme: "villagers"
    };

    document.body.classList.add("theme_villagers");
  }

  randNum(max) {
    return Math.floor(Math.random() * max);
  }

  async componentDidMount() {
    this.fetchData(this.state.theme);
  }

  componentDidUpdate() {
    console.log("Update");
  }

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
              urls.map((url) =>
                fetch(url).then((res) => {
                  /* console.log(res);
                  console.log(res.status); */
                  return res.json();
                })
              )
            );

            this.setState({
              fishCards: response.slice(0, 2),
              fishIcons: response.slice(2),
              currentCards: response.slice(0, 2),
              currentIcons: response.slice(2),
              fishLoaded: true,
              theme: "fish"
            });
          } catch (error) {
            console.log("Error", error);
          }
        }
        break;
      case "fossils":
        console.log("Loading " + tag);
        try {
          const response = await Promise.all(
            urls.map((url) => fetch(url).then((res) => res.json()))
          );

          this.setState({
            fossilCards: response.slice(0, 2),
            fossilIcons: response.slice(2),
            fossilLoaded: true,
            theme: "villagers"
          });
        } catch (error) {
          console.log("Error", error);
        }
        break;
      default:
        break;
    }
  }

  changeTheme(newTheme) {
    document.body.classList.remove(`theme_${this.state.theme}`);
    document.body.classList.add(`theme_${newTheme}`);
    this.setState({ theme: newTheme });

    switch (newTheme) {
      case "villagers":
        console.log("Switching theme to villagers.");
        if (this.state.villagerLoaded) {
          this.setState({
            currentCards: this.state.villagerCards,
            currentIcons: this.state.villagerIcons
          });
        } else {
          this.fetchData("villagers");
        }
        break;
      case "fish":
        console.log("Switching theme to fish.");
        if (this.state.fishLoaded) {
          this.setState({
            currentCards: this.state.fishCards,
            currentIcons: this.state.fishIcons
          });
        } else {
          this.fetchData("fish");
        }
        break;
      case "fossils":
        break;
      default:
        break;
    }
  }

  render() {
    function Logo() {
      return <img className="img-fluid" src={title} alt="Villagers HandBook" />;
    }

    function Villager(state) {
      return (
        <div className="p-3 card_flip">
          <div className="card_front">
            <img
              className="img-fluid rounded mt-lg-4"
              src={state.villager.image_uri}
              alt="Random Villager"
            />
          </div>
          <div className="card_back">
            <VillagerBack villager={state.villager} />
          </div>
        </div>
      );
    }

    function VillagerBack(state) {
      return (
        <div id="villager_back" className="container-fluid">
          <p>Name: {state.villager.name["name-USen"]}</p>
          <p>Species: {state.villager.species}</p>
          <p>Personality: {state.villager.personality}</p>
          <img src={state.villager.icon_uri} alt="Villager Icon" />
          <p>Birthday: {state.villager["birthday-string"]}</p>
          {/*           <p>Catchphrase: {state.villager.saying}</p> */}
        </div>
      );
    }

    function Icon(props) {
      switch (props.tag) {
        case "villagers":
          return (
            <div id="icon" class="col-2">
              <img
                class="img-fluid rounded mx-auto"
                alt="Random Villager Icon"
                src={props.villagers.icon_uri}
              />
            </div>
          );
        case "fish":
          return (
            <div id="icon" class="col-2">
              <img
                class="img-fluid rounded mx-auto"
                alt="Random Villager Icon"
                src={props.villagers.icon_uri}
              />
            </div>
          );
        case "fossils":
          return (
            <div id="icon" class="col-2">
              <img
                class="img-fluid rounded mx-auto"
                alt="Random Villager Icon"
                src={props.fossil.icon_uri}
              />
            </div>
          );
        default:
          break;
      }
    }

    function Card(props) {
      switch (props.tag) {
        case "villagers":
          return <Villager villager={props.currentCards[props.pos]} />;
        case "fish":
          return <Villager villager={props.currentCards[props.pos]} />;
        case "fossils":
          break;
        default:
          break;
      }
    }

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
        className="border d-flex align-items-center justify-content-center mt-auto"
      >
        <div className="container text-center">
          <div className="row d-flex align-items-center justify-content-around">
            <div
              id="title"
              class="col col-12 col-md-6 col-lg-6 order-lg-2 order-md-1 order-first"
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
              class="col col-8 col-md-6 align-self-center order-md-4"
            >
              Villagers Handbook is a lightweight search application that allows
              you to quickly and easily look up information related to the world
              of Animal Crossing New Horizons.
            </div>

            <div
              id="enter"
              className="col col-6 col-md-5 m-2 align-self-center order-md-5 order-2"
            >
              <Link to="/villagers">
                <button type="button" className="btn btn-secondary">
                  Get Started
                </button>
              </Link>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
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

          <div id="icon_container" className="row justify-content-center">
            <Icon
              villagers={this.state.currentIcons[0]}
              tag={this.state.theme}
            />
            <Icon
              villagers={this.state.currentIcons[1]}
              tag={this.state.theme}
            />
            <Icon
              villagers={this.state.currentIcons[2]}
              tag={this.state.theme}
            />
            <Icon
              villagers={this.state.currentIcons[3]}
              tag={this.state.theme}
            />
            <Icon
              villagers={this.state.currentIcons[4]}
              tag={this.state.theme}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
