import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppNavbar from './components/app/AppNavbar';
import Home from './views/Home';
import Ratio from './features/ratio/Ratio';
import Chart from './features/chart/Chart';
import Counter from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <Router>
      <AppNavbar/>
      <div className="App">
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
          <Route exact path="/counter">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
