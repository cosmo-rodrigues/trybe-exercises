import React from 'react';
import './App.css';
import DogsImage from './components/DogsImage';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>🐾  Pet's Love 🐶 </h1>
        <DogsImage />
      </div>
    );
  }
}

export default App;
