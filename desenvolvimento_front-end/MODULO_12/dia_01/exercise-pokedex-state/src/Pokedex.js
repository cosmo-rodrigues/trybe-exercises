import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      poker: 0,
      pokerClass: '',
    }
  }

  handleClick() {
    const reset = this.props.pokemons.length
    if(this.state.poker < (reset - 1)) {
      this.setState((anterior) => ({
        poker: anterior.poker + 1,
      }))
    } else {
      this.setState(({ poker: 0}))
    }
  }
    render() {
      const { pokemons } = this.props
        return (
          <div>
            <div className="pokedex">
              <Pokemon key={pokemons[this.state.poker].id} pokemon={pokemons[this.state.poker]} />
            </div>
            <div>
            <div>
              {pokemons.map(poker =>
                <button onClick={() => this.setState(({pokerClass: poker.type}))} key={poker.id}>{poker.type} </button>
            )}
            </div><br />
              <button onClick={this.handleClick}>Next Pokemon</button>
            </div>
          </div>
        );
    }
}

export default Pokedex;