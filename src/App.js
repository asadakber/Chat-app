import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routers from './Router/route';
import Register from './components/Register';
import { Provider } from 'react-redux';
import store from './components/store';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Routers />
      </Provider>
      </div>
    );
  }
}

export default App;
