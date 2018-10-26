import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom';
import logo from './logo.svg';
import Login from './components/Login.js'
import Home from './components/Home.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
        <NavLink to ='/'>
        Home
        </NavLink>
        </nav>
        <main>

        <Route path ='/login' component={Login}></Route>
        </main>
      </div>
    );
  }
}

export default App;
