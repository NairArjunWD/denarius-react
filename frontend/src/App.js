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

  closeAndAdd = async (stock) => {
    console.log("WE ARE HERE!!!!");
    try {
      const createdStockResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/stocks/`, {
        method: 'POST',
        body: JSON.stringify(stock),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await createdStockResponse.json();
      console.log(parsedResponse, ' this is response')

      this.setState({
        stocks: [...this.state.stocks, parsedResponse.data]
      })
    } catch (err) {
      console.log('error')
      console.log(err)
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
          <OurModal />
        <AddStock handleChange={this.handleChange} closeAndAdd={this.closeAndAdd}/>
        <div>
          <StockContainer />
          {/* <StockCard card={this.state}/> */}
        </div>
      </div>
    );
  }
}

export default App;
