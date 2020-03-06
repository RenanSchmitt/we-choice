import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './screens/Home';
import Votar from './screens/Vote';
import Dashboard from './screens/Dashboard';
import './App.css';


const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/Votar" exact component={Votar} />
      <Route path="/Dashboard" exact component={Dashboard} />

    </div>
  </Router>
);

export default App;
