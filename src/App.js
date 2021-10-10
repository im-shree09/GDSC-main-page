import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/home';
import './App.css';
import NetflixShow from './pages/NetflixShow';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path="/"  component={Home} />
    <Route exact path="/netflix-show"  component={NetflixShow} />
    </div>
   
    </BrowserRouter>
  );
}

export default App;
