import React, { Component } from 'react';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const Home = () => {
  return (
    <h1>Welcome to Home page</h1>
  );
}

export default App;

