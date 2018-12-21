import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import routes from './route'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
