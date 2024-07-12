import React from "react";
import { NavLink } from "react-router-dom";
import iconoPokemon from "../assets/icono-pokemon.png";

function Navigate() {
  const setActiveClass = ({ isActive }) => {
    return isActive ? "active" : "navLink";
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <h2>Pokémon</h2>
          <img src={iconoPokemon} alt="Icono Pokemon" />
        </div>
        <div>
          <NavLink className={setActiveClass} to={"/"}>
            Home
          </NavLink>
          <NavLink className={setActiveClass} to={"/pokemones"}>
            Pokemones
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navigate;
