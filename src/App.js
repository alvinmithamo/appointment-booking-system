import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ClientDashboard from './pages/ClientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact Component={Home} />
        <Route path='/client-dashboard' Component={ClientDashboard} />
        <Route path='/admin-dashboard' exact Component={AdminDashboard} />
        <Route path='/login' exact Component={Login} />
        <Route path='/signup' exact Component={Signup} />
      </Switch>
    </Router>
  )

}

export default App;
