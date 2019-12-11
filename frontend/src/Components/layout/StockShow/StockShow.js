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
        const stockId = this.props.match.params.id
    }
}