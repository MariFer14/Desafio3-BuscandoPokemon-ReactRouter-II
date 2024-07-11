import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Pokemones() {
  const [name, setName] = useState("");
  const [listaPokemones, setListaPokemones] = useState([]);

  const navigate = useNavigate();

  const irAPersonaje = () => navigate(`/pokemon/${name}`);

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
    <div>
      <h2>Selecciona un Pokémon</h2>

      <select value={name} onChange={(e) => setName(e.target.value)}>
        <option value="">Pokemones</option>
        {listaPokemones.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>{pokemon.name}</option>
        ))}
      </select>

      <button onClick={irAPersonaje}>Buscar</button>
    </div>
  );
}

export default Pokemones;
