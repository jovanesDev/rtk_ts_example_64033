import React from "react"
import { NavLink } from "react-router-dom"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar navbar-light bg-light px-5">
      <div className="container-fluid">
        <span className="navbar-brand">Appbar 👷🏼‍♂️</span>
        <div className="d-flex">
          <NavLink className={"nav-link"} to="/">
            Productos
          </NavLink>
          <NavLink className={"nav-link"} to="/favorites">
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
