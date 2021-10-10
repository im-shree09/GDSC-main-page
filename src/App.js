import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/home';
import './App.css';
import NetflixShow from './pages/NetflixShow';
import ScrollToTop from './components/scrollToTop/scrollToTop';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <ScrollToTop/>
    <switch>
    <Route exact path="/"  component={Home} />
    <Route exact path="/netflix-show"  component={NetflixShow} />
    </switch>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
