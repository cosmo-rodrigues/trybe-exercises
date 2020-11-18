import React from 'react';

class DadJoke extends React.Component {
  constructor(props) {
    super(props);
    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);
    this.state = {
      jokeObject: undefined,
      loading: true,
      storeJoke: [],
    }
  }

async fetchJoke() {
  this.setState({ loading: true},
    async () => {
    const requestHeaders = { headers: { Accept: 'application/json' } };
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
    const requestObject = await requestReturn.json();
    this.setState({
      loading: false,
      jokeObject: requestObject,
  })
})
}

componentDidMount() {
  this.fetchJoke();
}


saveJoke() {
  this.setState(({jokeObject, storeJoke}) => ({
    storeJoke: [...storeJoke, jokeObject],
  }))

  this.fetchJoke();
}

renderJokeElement() {
  return (
    <div>
      <p>{this.state.jokeObject.joke}</p>
      <button type="button" onClick={this.saveJoke}>Salvar piada</button>
    </div>
  )
}

render() {
  const { storeJoke, loading } = this.state;
  const loadingElement = <span>Loading...</span>;
  return (
    <div>
      <span>
        {storeJoke.map(({id, joke}) => (<p key={id}>{joke}</p>))}
      </span>
        {loading ? loadingElement : this.renderJokeElement()}
    </div>
  )
}
}

export default DadJoke;