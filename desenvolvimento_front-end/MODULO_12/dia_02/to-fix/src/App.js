import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleOption = this.handleOption.bind(this);
    this.state = {
      estado: '',
      nome: ''
    }
  }

  handleOption({target}) {
    const {name, value} = target;
    this.setState({[name]: value})
    
  }
  render() {
  return (
    <div className="App">
      <h1>Meu primeiro formulário em React</h1>
      <form>
        <select name='estado' onChange={this.handleOption}>
        <option>Estado</option>
          <option>Pará</option>
          <option>Maranhão</option>
          <option>São Paulo</option>
        </select><br />
        <label><br />
          Nome:
          <input onChange={this.handleOption} name='nome' type="text" placeholder="Digite seu nome" />
        </label>
      </form>
    </div>
  );
  }
}

export default App;
