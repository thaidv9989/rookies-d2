import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./PokemonTable.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearchs] = useState("");
  const [sortByName, setSortByName] = useState("def");

  useEffect(() => {
    let disCancel = false;
    axios({
      method: "GET",
      url: "http://pokeapi.co/api/v2/pokemon?offset=0&limit=50",
    }).then((response) => {
      if (!disCancel) {
        setPokemons(response.data.results);
      }
    });
    return () => {
      disCancel = true;
    };
  }, []);
  console.log(pokemons);
  const pokeFilter = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  const getPokeSorted = () => {
    if (sortByName === "def") return pokeFilter;
    if (sortByName === "f1") return pokeFilter.sort((pokemon1, pokemon2) => {
        if (pokemon1.name.toLowerCase() < pokemon2.name.toLowerCase())
          return -1;
        if (pokemon1.name.toLowerCase() > pokemon2.name.toLowerCase()) return 1;
        return 0;
      });
    if (sortByName === "f2")
      return pokeFilter.sort((pokemon1, pokemon2) => {
        if (pokemon1.name.toLowerCase() < pokemon2.name.toLowerCase()) return 1;
        if (pokemon1.name.toLowerCase() > pokemon2.name.toLowerCase())
          return -1;
        return 0;
      });

    
  };
  const pokeSorted = getPokeSorted();
  
  const handleSort = () => {
    if (sortByName === "def") {
      setSortByName("f1");
      return;
    }
    if (sortByName === "f1") {
        setSortByName("f2");
      return;
    }
    if (sortByName === "f2") {
        setSortByName("def");
        return;
      }
  };
  return (
    <div>
      <input
        type="text"
        id="myInput"
        value={search}
        onChange={(evt) => setSearchs(evt.target.value)}
        placeholder="Search for names.."
        title="Type in a name"
      ></input>
      <table>
        <tr>
          <th onClick={handleSort}>Name ({sortByName})</th>
          <th>URL</th>
        </tr>
        {pokeSorted.map((pokemon) => (
          <tr key={pokemon.name}>
            <td>{pokemon.name}</td>
            <td>
              <a href={pokemon.url}>{pokemon.url}</a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default PokemonList;
