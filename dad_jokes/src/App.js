import React, { Component } from 'react';
import {NavLink,Route} from ' react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    <nav>
    <NavLink to ='/' exact>
    Home
    </NavLink>
    </nav>
    <main>
    <Route path ='/' component={Home}></Route>
    <Route path ='/Login' component={Login}></Route>
    </main>
      </div>
    );
  }
}

export default App;
