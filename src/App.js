import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyNavbar from "./components/MyNavbar";

import Home from "./pages/Home";
import JoinPage from './pages/JoinPage';
import Earn from './pages/Earn';
import About from './pages/About';



function App() {
  return (
    <div>
      <Router>
        <MyNavbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/JoinPage" element={<JoinPage />} />
            <Route path="/Earn" element={<Earn />} />
            <Route path="/About" element={<About />} />
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
