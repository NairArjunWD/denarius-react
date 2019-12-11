import React, { Component } from 'react';

class StockShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stock: {},
            showAddStock: null,
        }
    }

    getStock = async () => {
        const stockId = this.props.match.params.id;
        try {
            const stocks = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/stocks`);
            const parsedStocks = await stocks.json();
            console.log(parsedStocks);

            this.setState({
                stocks: parsedStocks.data.stocks

            });
            console.log(stocks)
        } catch (err) {
            console.log(err);
        }
    }
}