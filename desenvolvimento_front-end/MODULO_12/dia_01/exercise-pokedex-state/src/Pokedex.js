import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      poker: 0,
      pokerClass: '',
      pokomons: props.pokemons,
    }
  }

  handleClick({target}) {
    const poks = this.state.pokomons.length;
    const { name, value } = target;
    this.setState((previusState) => ({
      poker: previusState.poker + 1,
      pokerClass: value
    }));
  }

    render() {
      const {pokemons} = this.props;

        return (
          <div>
            <div className="pokedex">
            </div>
            <div>
            <div>
              <button onClick={() => this.setState({pokerClass:''})}>All</button>
              {pokemons.map(poker =>
                <button onClick={this.handleClick} value={poker.type} key={poker.id}>{poker.type}</button>
            )}
            </div><br />
              <button onClick={this.handleClick} >Next Pokemon</button>
            </div>
          </div>
        );
    }
}

export default Pokedex;