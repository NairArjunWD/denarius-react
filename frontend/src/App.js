import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/layout/Navbar.js'
import OurModal from './Components/layout/OurModal.js'

function App() {
  return (
    <div className="App">
      <Navbar />
        <OurModal />
    </div>
  );
}

export default App;
