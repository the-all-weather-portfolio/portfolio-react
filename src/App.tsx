import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppNavbar from './components/app/AppNavbar';
import Home from './views/Home';
import Ratio from './views/Ratio';
import Chart from './views/Chart';
import './App.css';

function App() {
  return (
    <Router>
      <AppNavbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/ratio">
          <Ratio />
        </Route>
        <Route exact path="/chart">
          <Chart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
