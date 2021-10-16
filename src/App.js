import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/home';
import './App.css';
import NetflixShow from './pages/NetflixShow';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <ScrollToTop/>
    <switch>
    <Route exact path="/"  component={Home} />
    <Route exact path = "/sign-up"  component={SignUp}/>
    <Route exact path="/netflix-show"  component={NetflixShow} />
    <Route exact path ="/main-page"  component={MainPage} />
     </switch>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
