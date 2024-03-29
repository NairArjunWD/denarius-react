import React, { Component } from 'react'

class EditStock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: '',
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
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }

    closeAndEdit = async (stock) => {
        console.log('HELLO HELLO')
        // console.log(this.props, 'HELLO HELLO')
        try {
            const editResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/stocks/${this.props.stock.id}`, {
                method: 'PUT',
                body: JSON.stringify(stock),
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

    handleSubmit = (e) => {
        console.log("EDIT EDIT EDIT")
        e.preventDefault()
        this.closeAndEdit(this.state)
    }

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
    }

    render() {
        return (
            <div>

                <a class="waves-effect waves-light btn modal-trigger" href="#modal3">Edit Stock</a>


                <div id="modal3" class="modal">
                    <div class="modal-content">
                        <h4>Edit Stock Card</h4>

                        <div class="row">
                            <form class="col s12" onSubmit={this.handleSubmit}>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input id="input_text1" type="text" data-length="10" name="name" placeholder="Name" onChange={this.handleChange} />
                                        <input placeholder='comapny' id="input_text2" type="text" data-length="10" name="company" placeholder="Company" onChange={this.handleChange} />
                                        <input id="input_text3" type="number" data-length="10" name="amount" placeholder="Amount" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="modal-close waves-effect waves-green btn-flat">Agree</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditStock