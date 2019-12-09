import React, { Component } from 'react';
import AddStock from '../AddStock/AddStock.js';

class StockCard extends Component {

    constructor() {
        super();

        this.state = {
            name: `${AddStock.name}`,
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
                            <span class="card-title">Card Title</span>
                            <ul>
                                <li>
                                    {this.props.card.name}
                                </li>
                                <li>
                                    {this.props.card.company}
                                </li>
                                <li>
                                    {this.props.card.amount}
                                </li>
                            </ul>
                        </div>
                        <div class="card-action">
                            <a href="#">Enlarge</a>
                            <a href="#">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}




export default StockCard