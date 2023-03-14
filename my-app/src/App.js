/* import React, { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <div className="App">
      <h1>Pokémons</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App; */

// ----------------------------------------------------------------


import React, { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((data) => setPokemons(data.results));
  }, []);

  function handlePokemonClick(pokemon) {
    fetch(pokemon.url)
     .then((response) => response.json())
     .then((data) => setSelectedPokemon(data));
  }

  return (
    <div className="App">
      <h1>Pokémons</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name} onClick={() => handlePokemonClick(pokemon)}>
            {pokemon.name}
          </li>
        ))}
      </ul>
      {selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name}</h2>
          <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
          <p>Weight: {selectedPokemon.weight}</p>
          <p>Height: {selectedPokemon.height}</p>
          <p>Types: {selectedPokemon.types && selectedPokemon.types.map(type => type.type.name).join(', ')}</p>
          <p>Stats:</p>
          <ul>
            {selectedPokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <p>Base Experience: {selectedPokemon.base_experience}</p>
          <p>Abilities: {selectedPokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
        </div>
      )}
    </div>
  
  );
}    
export default App;

//----------------------------------------------------------------

/* import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function App() {

  const [pokemonData, setPokemonData] = useState(null);
  const [moveData, setMoveData] = useState(null);
  const [abilityData, setAbilityData] = useState(null);
  const [itemData, setItemData] = useState(null);
  const [typeData, setTypeData] = useState(null);
  const [generationData, setGenerationData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json();
      setPokemonData(data);
    };
  
    const fetchMoveData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/move/');
      const data = await response.json();
      setMoveData(data);
    };
  
    const fetchAbilityData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/ability/');
      const data = await response.json();
      setAbilityData(data);
    };
  
    const fetchItemData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/item/');
      const data = await response.json();
      setItemData(data);
    };
  
    const fetchTypeData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/type/');
      const data = await response.json();
      setTypeData(data);
    };
  
    const fetchGenerationData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/generation/');
      const data = await response.json();
      setGenerationData(data);
    };
  
    fetchPokemonData();
    fetchMoveData();
    fetchAbilityData();
    fetchItemData();
    fetchTypeData();
    fetchGenerationData();
  }, []);
  
  if (pokemonData) {
    return (
      <div>
        <h2>Primeros 20 pokémon:</h2>
        <ul>
          {pokemonData.results.slice(0, 20).map(pokemon => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
}

export default App; */

//----------------------------------------------------------------
/* 
async function getPokemonData(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data = await response.json();
  return data;
}

async function getPokemonInfo(pokemonName) {
  const pokemonData = await getPokemonData(pokemonName);
  const { id, name, species: { url } } = pokemonData;

  const speciesResponse = await fetch(url);
  const speciesData = await speciesResponse.json();
  const speciesInfo = speciesData.flavor_text_entries[0].flavor_text;

  return { name, id, species: speciesInfo };
}

async function getAllPokemonInfo(pokemonList) {
  const pokemonInfoList = await Promise.all(pokemonList.map(getPokemonInfo));
  return pokemonInfoList;
}

const pokemonList = ["pikachu", "charizard", "squirtle"];

getAllPokemonInfo(pokemonList)
  .then(console.log)
  .catch((error) => console.error(error));
 */
