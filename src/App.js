import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom"
import Home from './screen/Home/Home';

class App extends Component {
  render() {
    return (
      <div style={{justifyContent:'center',alignItems:"center",flex:1,  }}>
        <Switch>
     <Route path="/" component={Home} />
</Switch>
      </div>
    );
  }
}

export default App;
