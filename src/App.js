import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

// Switch was deprecated in react 17.0.0, use <Routes> instead.


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        {/* will be element not component {<home/>} */}
        <Route path= '/' exact Component= 
        {Home} />
        <Route path = '/services' exact Component= {Services}/>
        <Route path = '/products' exact Component= {Products}/>
        <Route path = '/sign-up' exact Component= {SignUp}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
