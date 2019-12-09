import React, {Component} from 'react';
import AddStock from '../AddStock/AddStock.js';

class StockContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stocks: []
        }
    }

    // trigger component once it loads
    componentDidMount() {
        this.getStocks();
    }

    getStock = async () => {

        try {
            const stocks = await fetch (`${process.env.REACT_APP_API_URL}/api/v1/stocks`);
            const parsedStocks = await stocks.json();
            console.log(parsedStocks);

            this.setState( {
                stocks: parsedStocks.data
            });

        } catch (err) {
            console.log(err)
        }
    }

    addStock = async (e, stockFromForm) => {
        e.preventDefault();
        console.log(stockFromForm);

        try {

            const createdStockResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/stocks', {
                method: 'POST',
                body: JSON.stringify(stockFromForm),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const parsedResponse = await createdStockResponse.json();
            console.log(parsedResponse, ' this is response')

            this.setState({stocks: [...this.state.stocks, parsedResponse.data]})
        } catch (err) {
            console.log('error')
            console.log(err)
        }
    }
}