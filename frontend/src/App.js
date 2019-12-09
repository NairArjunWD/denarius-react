import React from 'react';
// import { BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';
import Navbar from './Components/layout/Navbar/Navbar.js'
import OurModal from './Components/layout/OurModal/OurModal.js'
import AddStock from './Components/layout/AddStock/AddStock.js'
import StockCard from './Components/layout/StockCard/StockCard.js'

function App() {
  return (
    <div className="App">
      <Navbar />
        <OurModal />
      <AddStock />
      <div>
        <StockCard />
      </div>
    </div>
  );
}

export default App;
