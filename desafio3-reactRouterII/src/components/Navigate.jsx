import React from "react";
import { NavLink } from "react-router-dom";

function Navigate() {
  const setActiveClass = ({ isActive }) => {
    return isActive ? "active" : undefined;
  };

  return (
    <div>
      <h2>Pokémon</h2>
      <NavLink className={setActiveClass} to={"/home"}>
        Home
      </NavLink>
      {" - "}
      <NavLink className={setActiveClass} to={"/pokemones"}>
        Pokemones
      </NavLink>
    </div>
  );
}

export default Navigate;


