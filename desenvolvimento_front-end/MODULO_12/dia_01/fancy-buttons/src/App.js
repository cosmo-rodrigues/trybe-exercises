import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color: 'red',
    }
  }

  changeColor() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    let color = this.state.color;
    if(color === 'red') {
      this.setState({ color: 'blue'})
    } else {
      this.setState({ color: 'red'})
    }
  }

  render() {
  return (
    <div className='App' style={{backgroundColor: this.state.color}}>
    <button onClick={this.changeColor}>MUDE A COR!</button>
    </div>
    )
  }
}

export default App;