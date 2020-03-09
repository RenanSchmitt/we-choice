import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './screens/Home';
import Restaurants from './screens/Restaurants';
import Dashboard from './screens/Dashboard';
import Authentication from './screens/Authentication';
import Votar from './screens/Votar';


import './App.css';


const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/Home" exact component={Home} />
      <Route path="/Restaurants" exact component={Restaurants} />
      <Route path="/Dashboard" exact component={Dashboard} />
      <Route path="/Login" exact component={Authentication} />
      <Route path="/Votar/:id" exact component={Votar} />
    </div>
  </Router>
);

export default App;
