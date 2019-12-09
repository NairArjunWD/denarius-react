import React, {Component} from 'react'

// import { BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';
import Navbar from './Components/layout/Navbar/Navbar.js'
import OurModal from './Components/layout/OurModal/OurModal.js'
import AddStock from './Components/layout/AddStock/AddStock.js'
import StockCard from './Components/layout/StockCard/StockCard.js'
import StockContainer from './Components/layout/StockContainer/StockContainer';

class App extends Component{

state = {
  name: '',
  company: '',
  amount: ''
}

handleChange = (e) => {
  this.setState({ [e.currentTarget.name]: e.currentTarget.value })
}
  render() {
    return (
      <div className="App">
        <Navbar />
          <OurModal />
        <AddStock handleChange={this.handleChange}/>
        <div>
          <StockContainer />
          <StockCard card={this.state}/>
        </div>
      </div>
    );
  }
}

export default App;
