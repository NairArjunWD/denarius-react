import React, {Component} from 'react'

import { BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';
import Navbar from './Components/layout/Navbar/Navbar.js'
import AddStock from './Components/layout/AddStock/AddStock.js'
import StockContainer from './Components/layout/StockContainer/StockContainer.js';
import LoginPage from './Components/layout/LoginPage/LoginPage.js';

class App extends Component{

state = {
  name: '',
  company: '',
  amount: '',
  stocks: []
}

handleChange = (e) => {
  this.setState({ [e.currentTarget.name]: e.currentTarget.value })
}

componentDidMount() {
  this.getStock()
}


  getStock = async () => {

    try {
      const stocks = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/stocks`);
      const parsedStocks = await stocks.json();
      console.log(parsedStocks);

      this.setState({
        stocks: parsedStocks.data

      });
      console.log(stocks)

    } catch (err) {
      console.log(err)
    }
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

  closeAndEdit = async (e) => {
    e.preventDefault();
    try {
      const editResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/timelines/${this.state.timelineToEdit.id}`, {
        method: 'PUT',
        body: JSON.stringify(this.state.stockToEdit),
        header: {
          'Content-Type': 'application/json'
        }
      });
      const editResponseParsed = await editResponse.json();
      const newStockArrayWithEdit = this.state.stocks.map((stock) => {
        if (stock.id === editResponseParsed.data.id) {
          stock = editResponseParsed.data
        }
        return stock;
      });
      this.setState({
        stocks: newStockArrayWithEdit,
        showEditStock: false
      });
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <AddStock handleChange={this.handleChange} closeAndAdd={this.closeAndAdd}/>
        <div>
          <StockContainer stocks={this.state.stocks}/>
          {/* <StockCard card={this.state}/> */}
        </div>
      </div>
    );
  }
}

export default App;
