import React from "react";
import Navbar from "./components/Navigate";
import { Route, Routes } from "react-router-dom";
import Pokemones from "./views/Pokemones";
import Home from "./views/Home";
import DetallesPokemon from "./views/DetallesPokemon";



function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones/" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<DetallesPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
