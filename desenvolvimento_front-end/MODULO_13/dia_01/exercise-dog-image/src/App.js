import React from 'react';
import './App.css';
import DogsImage from './components/DogsImage';

class App extends React.Component {


  async apiImages() {
    const results = await fetch('https://dog.ceo/api/breeds/image/random');
    console.log(results)
    const toJason = results.json();
    toJason.then(object => console.log(object.message))
  }

  componentDidMount() {
    this.apiImages()
  }

  render() {
    return (
      <div className="App">
        Hello React
        <DogsImage />
      </div>
    );
  }
}

export default App;
