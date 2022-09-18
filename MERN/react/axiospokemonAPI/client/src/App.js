import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807`)
    .then((res) => {
        console.log(res.data.results);
        setPokemon(res.data.results)
    })
    .catch((err)=> {
        console.error(err);
        setPokemon({error:"No Pokemon Here!"})
    });
  }, []);

  const fetchPokemon = (e) => setButtonClicked(!buttonClicked);

  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
        <ul>
          {
            buttonClicked?

          pokemon.map((p, i) => <li key={i}>{p.name}</li>)
          :
            ""
          }
        </ul>
    </div>
  )
}

export default App;
