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

    componentDidMount() {
        this.getStock()
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>{this.state.stocks.name}</h1>
                    <h4>Created: {this.state.stocks.created_at}</h4>
                </div>
                <div>
                    <h2>Company: {this.state.stocks.company}</h2>
                    <h2>Amount: {this.state.stocks.amount}</h2>
                </div>
            </React.Fragment>
        )
    }
}

export default StockShow;