import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Pokemones() {
  const [name, setName] = useState("");
  const [listaPokemones, setListaPokemones] = useState([]);

  const navigate = useNavigate();

  const irAPersonaje = () => navigate(`/pokemones/${name}`);

  useEffect(() => {
    consultaDeAPI();

    console.log("SOY LA API");
  }, []);

  const consultaDeAPI = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "<------- DATA");
    setListaPokemones(data.results);
  };

  return (
    <div className="selectPokemon">
      <h1>Selecciona un Pokémon</h1>

      <select value={name} onChange={(e) => setName(e.target.value)}>
        <option value="">Pokemones</option>
        {listaPokemones.map((pokemones, index) => (
          <option key={index} value={pokemones.name}>
            {pokemones.name}
          </option>
        ))}
      </select>

      <div className="boton">
        <button onClick={irAPersonaje}>Ver Detalles</button>
      </div>
    </div>
  );
}

export default Pokemones;
