import React from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        Contador App
        <br />
        <br />
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <Counter value={this.state.counter} />
      </div>
    );
  }
}

export default App;
