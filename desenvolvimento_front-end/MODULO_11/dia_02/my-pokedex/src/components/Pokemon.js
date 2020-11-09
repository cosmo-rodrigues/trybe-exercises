import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const pokemons = this.props.pokemon;
    return (
      pokemons.map(poker => {
        return  <div key={poker.id} className='pokemon-card'>
          <div>
            <p>{poker.name}</p>
            <p>{poker.type}</p>
            <p>Average Weight {poker.averageWeight.value} {poker.averageWeight.measurementUnit}</p>
          </div>
          <img src={poker.image} alt={poker.name} />
        </div>
      })
    )
  }
}

export default Pokemon;