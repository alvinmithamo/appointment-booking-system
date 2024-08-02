import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Home from './pages/Home';
import ClientDashboard from './pages/ClientDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './pages/Profile';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/client-dashboard' Component={ClientDashboard} />
        <Route path='/admin-dashboard' exact Component={AdminDashboard} />
        <Route path='/login' exact Component={Login} />
        <Route path='/signup' exact Component={Signup} />
        <Route path='/profile' exact Component={Profile} />
      </Routes>
      <Footer />
    </Router>
    </AuthProvider>
  )

}

export default App;
