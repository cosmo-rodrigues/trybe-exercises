import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [limit, setLimit] = useState(1)
  const urlApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  return (
    <div className="App">
      <h1>Pokemons List</h1>
    </div>
  );
}

export default App;
