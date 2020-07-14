import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppNavbar from './components/app/AppNavbar';
import './App.css';

function App() {
  return (
    <Router>
      <AppNavbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
