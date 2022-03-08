import React, { useEffect } from "react";
import { useState } from "react";
import "./Pokemon.css";
import axios from "axios";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState({
    name: null,
    frontImage: null,
    id: null,
    height: null,
  });
  const [pokemonId, setPokemonId] = useState(1);
  useEffect(() => {
    let disCancel = false;
    axios({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    }).then((response) => {
      if (!disCancel) {
        console.log(response);
        setPokemon({
          name: response.data.name,
          frontImage: response.data.sprites.front_default,
          id: response.data.id,
          height: response.data.height,
        });
      }
    });
    return () => {
        disCancel = true;
    };
  }, [pokemonId]);
  const handlePrevious = () => {
    setPokemonId(pokemonId - 1);
  };
  const handleNext = () => {
    setPokemonId(pokemonId + 1);
  };
  return (
    <div className="poke_body">
      <p>{pokemon.name}</p>
      <img src={pokemon.frontImage} />
      <p>ID: {pokemon.id}</p>
      <p>Height: {pokemon.height}</p>
      <button className="poke_btn" onClick={handlePrevious}>
        Previous
      </button>
      <button className="poke_btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};
export default PokemonPage;
