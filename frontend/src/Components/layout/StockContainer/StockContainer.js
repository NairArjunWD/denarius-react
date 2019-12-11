import React, {Component} from 'react';
import AddStock from '../AddStock/AddStock.js';
// import StockCard from '../StockCard/StockCard.js';
import StockList from '../StockList/StockList.js';
import EditStock from '../EditStock/EditStock.js';

class StockContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards:'',
            stocks: [],
            showAddModal: null,
            showEditStock: null,
            id: '',
            stockToEdit: {
                name: '',
                company: '',
                amount: ''
            }
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
            console.log(stocks)

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
                stocks: [...this.state.stocks, parsedResponse.data],
                showAddModal: false
            })
        } catch (err) {
            console.log('error')
            console.log(err)
        }
    }

    closeAndEdit = async (e) => {
        e.preventDefault();
        try {
            const editResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/stocks/${this.state.stockToEdit.id}`, {
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

    openAndEdit = (stockFromTheList) => {
        this.setState({
            showEditStock: true,
            stockToEdit: {
                ...stockFromTheList
            }
        })
    }
    handleEditChange = (e) => {
        this.setState({
            stockToEdit: {
                ...this.state.stockToEdit,
                [e.currentTarget.name]: e.currentTarget.value
            }
        });
    }

    showAddModal = () => {
        this.setState({
            showAddModal: true
        })
    }
    closeModal = () => {
        this.setState({
            showAddModal: false
        })
    }
    

    render() {
        return (
            <React.Fragment>
                {/* {
                    // <StockCard card={this.state} />
                    this.state.showAddModal
                    ?
                    <AddStock closeAndAdd={this.closeAndAdd} closeModal={this.closeModal} />
                    :
                    null
           
                }
                {
                    this.state.showEditStock
                    ?
                    <EditStock closeAndEdit={this.closeAndEdit} closeModal={this.closeModal} handleEditChange={this.handleEditChange} stockToEdit={this.state.stockToEdit} />
                    :
                    null
                } */}
                <EditStock handleChange={this.handleEditChange} closeAndEdit={this.closeAndEdit} />
                <StockList stocks={this.props.stocks} openAndEdit={this.openAndEdit} />
            </React.Fragment>
        )
    }
}

export default StockContainer;