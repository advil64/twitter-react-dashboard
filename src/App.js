import React from 'react';
import Navigation from './other_components/Navbar.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from 'react-router-dom';

import HomePage from './hompage-stuff/homePage.js';
import ResultsPage from './resultspage-stuff/resultsPage.js'

import './css/bootstrap.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        <Route exact path='/' component={HomePage}/>
        <Route path='/:a([A-Za-z]+)' component={ResultsPage}/>
      </div>
    </HashRouter>
  );
}

export default App;
