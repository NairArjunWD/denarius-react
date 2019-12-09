import React, {Component} from 'react';
import AddStock from '../AddStock/AddStock.js';
import StockCard from '../StockCard/StockCard.js';

class StockContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards:'',
            stocks: [],
            showAddModal: null
        }
    }

    // trigger component once it loads
    componentDidMount() {
        this.getStock()
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

    closeAndAdd = async (e, stock) => {
        e.preventDefault();
        console.log(stock);

        try {

            const createdStockResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/stocks`, {
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

    showAddModal = () => {
        this.setState({
            showAddModal: true
        })
    }
    

    render() {
        console.log(this.state.stocks, 'stocks are here')
        return (
            <React.Fragment>
                {
                    <StockCard card={this.state} />
                }
                
            </React.Fragment>
        )
    }
}

export default StockContainer;