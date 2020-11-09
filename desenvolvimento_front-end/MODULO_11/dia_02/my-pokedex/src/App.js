import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Pokemon from './components/Pokemon';
import pokemons from './components/data'

function App() {
  return (
    <div className="App">
        <Header />
      <div className='poke-cards'>
        <Pokemon pokemon={pokemons}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
