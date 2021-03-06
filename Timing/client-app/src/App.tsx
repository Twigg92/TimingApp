import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { Footer } from './Footer';

function App() {
  return (
    <div className="container">
        <Navbar />
        <Main />
    </div>
  );
}

export default App;
