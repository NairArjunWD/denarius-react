import React, {Component} from 'react'
import { Button, Card, Row, Col } from 'react-materialize';
// import StockCard from '../StockCard/StockCard';
import M from "materialize-css/dist/js/materialize.min.js"
import { Link } from 'react-router-dom'

export class StockList extends Component {

    componentDidMount() {
        // document.addEventListener("DOMContentLoaded", function() {
        //     const stocks = props.stocks.map((stock)
        // })
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Stocks</h1>
                    <Card>

                        <div class="row">
                            <div class="col s12 m4">
                                <div class="card #66bb6a green lighten-1">
                                    <div class="card-content white-text" key={this.props.stocks.id}>
                                        
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
                    </Card>
                </div>
            </React.Fragment>
        )
    };

    // return (
    //     <div>
    //         {stocks}
    //     </div>
    // )
}

export default StockList