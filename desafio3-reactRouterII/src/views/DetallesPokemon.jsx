import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetallesPokemon() {

  const { name } = useParams();
  const [descripcionPokemon, setDescripcionPokemon] = useState(null)

   useEffect(() => {
    const fetchPokemonDescripcion = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDescripcionPokemon(data);
      } catch (error) {
        console.error("Error decripcion de pokemon", error);
      }
    };

    fetchPokemonDescripcion();
  }, [name]);

  return (
    <div>
      <h1>Detalles del Pokémon: {name}</h1>
      {descripcionPokemon && (
        <div>
          <img
            src={descripcionPokemon.sprites.other["official-artwork"].front_default}
            alt={`Imagen de ${descripcionPokemon.name}`}
          />
          <p>Nombre: {descripcionPokemon.name}</p>
          <p>Altura: {descripcionPokemon.height}</p>
          <p>Peso: {descripcionPokemon.weight}</p>
          <p>Poderes:</p>
          <ul>
            {descripcionPokemon.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
          <p>Estadísticas:</p>
          <ul>
            {descripcionPokemon.stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DetallesPokemon;