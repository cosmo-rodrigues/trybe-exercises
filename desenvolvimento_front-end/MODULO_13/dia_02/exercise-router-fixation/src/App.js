import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} />
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning"/>} />
          <Route component={() => <div><h1>Not found</h1><br /> 404!</div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;