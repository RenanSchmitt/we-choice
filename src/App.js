import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './screens/Home';
import Restaurants from './screens/Restaurants';
import Dashboard from './screens/Dashboard';
import './App.css';


const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/Restaurants" exact component={Restaurants} />
      <Route path="/Dashboard" exact component={Dashboard} />

    </div>
  </Router>
);

export default App;
