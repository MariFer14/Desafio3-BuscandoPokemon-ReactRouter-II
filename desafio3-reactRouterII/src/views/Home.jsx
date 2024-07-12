import React from 'react'
import bgPrincipal from "../assets/bg-principal.webp"

function Home() {
  return (
    <div className='bienvenida'>
      <h1>Bienvenido Maestro Pokémon</h1>
      <img src={bgPrincipal} alt="Bg Principal" />
    </div>
  )
}

export default Home