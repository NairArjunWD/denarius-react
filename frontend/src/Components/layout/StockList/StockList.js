import React from 'react'
import { Button, Card, Row, Col } from 'react-materialize';
// import StockCard from '../StockCard/StockCard';
import M from "materialize-css/dist/js/materialize.min.js"
import { Link } from 'react-router-dom'
import EditStock from '../EditStock/EditStock.js'

const StockList = (props) => {
    const stocks = props.stocks.map((stock) => {
        return(
            <React.Fragment >
            <div>
                <h1>Stocks</h1>
                <Card>

                    <div class="row">
                        <div class="col s12 m4">
                            <div class="card #66bb6a green lighten-1">
                                <div class="card-content white-text" key={stock.id}>

                                    <span class="card-title">{stock.name}</span>

                                    <ul>
                                        <li>
                                            {stock.company}
                                        </li>
                                        <li>
                                            {stock.amount}
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-action">
                                    <a href="#"><i class="material-icons">photo_size_select_large
</i></a>
                                    {/* <EditStock handleChange={this.handleChange} closeAndEdit={this.closeAndEdit} /> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            </React.Fragment >
        )
    })

    return (
        <div>
            {stocks}
        </div>
    )
}

// export class StockList extends Component {
//     const stocks = props.stocks.map((stock) =≥ {
        
//     })

//     componentDidMount() {
//         // document.addEventListener("DOMContentLoaded", function() {
//         //     const stocks = props.stocks.map((stock)
//         // })
//         // const stocks = props.stocks.map((stock)=≥ {

//         // })
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <div>
//                     <h1>Stocks</h1>
//                     <Card>

//                         <div class="row">
//                             <div class="col s12 m4">
//                                 <div class="card #66bb6a green lighten-1">
//                                     <div class="card-content white-text" key={stock.id}>
                                        
//                                         <span class="card-title">{stock.name}</span>
                                        
//                                         <ul>
//                                             <li>
//                                                 {stock.company}
//                                             </li>
//                                             <li>
//                                                 {this.props.stocks.amount}
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div class="card-action">
//                                         <a href="#"><i class="material-icons">photo_size_select_large
// </i></a>
//                                         <a href="#">Edit</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Card>
//                 </div>
//             </React.Fragment>
//         )
//     };

//     // return (
//     //     <div>
//     //         {stocks}
//     //     </div>
//     // )
// }

export default StockList