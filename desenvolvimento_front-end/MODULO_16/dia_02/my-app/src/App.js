import React from 'react';
import { Provider } from 'react-redux';
import Player from './components/Player';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import store from './store';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid row m-0">
        <Provider store={store}>
          <SearchBar />
            <Player />
            <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;
