import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [statusPoke, setStatusPoke] = useState("Já Obtido");
  const Pokemon = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  /*

  const addPokedex = (nameP, idP) => {
    status(nameP, idP);
  };

  const status = async (namePoke, idPoke) =>  {
    try {
    const url = `http://localhost:3333/poke`;
    console.log(namePoke + idPoke);
    const res = axios.post(url, {
      name: namePoke,
      id: idPoke,
    });
    console.log(res.status);
    } catch (e) {
      console.log(e);
    }
  };

  function status(idPoke){
    getStatus(idPoke);
    return 
  };

  const getStatus = async (idStatus) => {
    try {
      const url = `http://localhost:3333/poke`;
      const res = await axios.get(url);
      setStatusPoke(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  
  onClick={status(data.id)}
  */


  const Submit = (e) => {
    e.preventDefault();
    getPokemon();  
  };

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);  
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);   
      getStatus(res.data.id);
    } catch (e) {
      console.log(e);
    }
  };

  const getStatus = async (pokeID) => {
    console.log(pokeID);
    try{
      const url = `http://localhost:3333/poke`;
      const res = await axios.get(url, {
        'id': pokeID,
      });
      setStatusPoke(res.data.error);
      console.log(res.data.error);
    }
    catch(e){
      console.log(e);
    }
  };

  return (
    <div className="App">
      <form onSubmit={Submit}>
        <label>
          <input
            type="text"
            onChange={Pokemon}
          />
        </label>
      </form>

      {pokemonData.map((data) => {
        return (
          <div className="container">
            <div className="pokemon">
            <div className="title"><h2> { statusPoke } </h2></div>
            <img src={data.sprites["front_default"]} />
                  <div className="field">Type: {pokemonType}</div>
                  <div className="field">Height:
                    {" "}
                    {(data.height /10)} m
                  </div>
                  <div className="field">Weight:
                    {" "}
                    {(data.weight / 10)} Kg
                  </div>
                  <div className="field"><button>Adicionar</button></div>
                  </div>
            </div>
        );
      })}
    </div>
  );
};

export default App;