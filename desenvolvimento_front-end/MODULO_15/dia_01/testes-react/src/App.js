import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      savedEmail: [],
    }
    this.hendleEmail = this.hendleEmail.bind(this);
    this.hendleSaveEmail = this.hendleSaveEmail.bind(this);
  }

  hendleEmail({target}) {
    const { value } = target;
    this.setState( { email: value });
  }

  hendleSaveEmail() {
    const { email } = this.state;
    this.setState((previous) => ({
      savedEmail: [...previous.savedEmail, email],
      email: '',
    }));
  }
  render(){
    const { savedEmail, email } = this.state;
    return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <label htmlFor="id-email">
          Email
        </label>
        <input 
          id="id-email"
          type="email"
          value={email}
          onChange={this.hendleEmail}
          onFocus={(e) => e.target.value = ""}
        />
        <input
          id="btn-send"
          type="button"
          value="Enviar"
          onClick={this.hendleSaveEmail}
        />
        <input id="btn-back" type="button" value="Voltar" />
      </div>
      <ol className="list">
        {savedEmail.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ol>
    </div>
  );
  }
}

export default App;
