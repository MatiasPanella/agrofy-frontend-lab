import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import PokemonPage from '../../components/PokemonPage/PokemonPage';
const Pokedex = () => (
  <div className="pokedex page">
    <h1>Pokemon</h1>
    <SearchBar />
    <PokemonPage />
  </div>
 
);

export default Pokedex;
