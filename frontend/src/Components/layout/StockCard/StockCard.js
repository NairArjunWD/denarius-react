import React, { Component } from 'react';
import AddStock from '../AddStock/AddStock.js';

class StockCard extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            company: '',
            amount: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }

    render() {
        return (
            <div class="row">
                <div class="col s12 m4">
                    <div class="card #66bb6a green lighten-1">
                        <div class="card-content white-text">
                            <span class="card-title">{this.props.card.name}</span>
                            <ul>
                                <li>
                                    {this.props.card.company}
                                </li>
                                <li>
                                    {this.props.card.amount}
                                </li>
                            </ul>
                        </div>
                        <div class="card-action">
                            <a href="#"><i class="material-icons">photo_size_select_large
</i></a>
                            <a href="#">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}




export default StockCard