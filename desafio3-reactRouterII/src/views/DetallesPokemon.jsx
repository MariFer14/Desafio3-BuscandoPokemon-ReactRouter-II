import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetallesPokemon() {
  const { name } = useParams();
  const [descripcionPokemon, setDescripcionPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDescripcion = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
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
    <div className="pokemon">
      <h1>{name}</h1>
      {descripcionPokemon && (
        <div className="descripcion">
          <div className="imagen">
            <img
              src={
                descripcionPokemon.sprites.other["official-artwork"]
                  .front_default
              }
              alt={`Imagen de ${descripcionPokemon.name}`}
            />
          </div>

          <div className="informacion">
            <div>
              <p> <strong>Nombre:</strong> {descripcionPokemon.name}</p>
              <p> <strong>Altura:</strong> {descripcionPokemon.height}</p>
              <p> <strong>Peso:</strong> {descripcionPokemon.weight}</p>
              <p> <strong>Poderes:</strong></p>
              <ul>
                {descripcionPokemon.types.map((type, index) => (
                  <li key={index}>{type.type.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <p><strong>Estadísticas:</strong></p>
              <ul>
                {descripcionPokemon.stats.map((stat, index) => (
                  <li key={index}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetallesPokemon;
