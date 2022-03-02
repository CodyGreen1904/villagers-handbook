import React from "react"
import vhtext from "../img/vhtext_white.png"
import { NavLink } from "react-router-dom"
import "../styles/navigation.css"

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              id="logo"
              src={vhtext}
              alt="Logo for our the Villager's Handbook website"
            />
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/villagers">
                  Villagers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fossils">
                  Fossils
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fish">
                  Fish
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
