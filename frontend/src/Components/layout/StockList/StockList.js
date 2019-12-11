import React from 'react'
import { Button, Card, Row, Col } from 'react-materialize';
// import StockCard from '../StockCard/StockCard';
import M from "materialize-css/dist/js/materialize.min.js"
import { Link } from 'react-router-dom'
import EditStock from '../EditStock/EditStock.js'


// handleChange = (e) => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value })
// }

const StockList = (props) => {

    // openAndEdit = (stockFromTheList) => {
    //     this.setState({
    //         showEditStock: true,
    //         stockToEdit: {
    //             ...stockFromTheList
    //         }
    //     })
    // }
    // handleEditChange = (e) => {
    //     this.setState({
    //         stockToEdit: {
    //             ...this.state.stockToEdit,
    //             [e.currentTarget.name]: e.currentTarget.value
    //         }
    //     });
    // }
    const stocks = props.stocks.map((stock) => {
        return(
            <React.Fragment >
                {/* {
                    this.state.showEditStock
                        ?
                        <EditStock closeAndEdit={this.closeAndEdit} closeModal={this.closeModal} handleEditChange={this.handleEditChange} stockToEdit={this.state.stockToEdit} />
                        :
                        null
                } */}
            <div>
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
                                        <EditStock stock={stock} />
                                        {/* <i class="material-icons">photo_size_select_large
                                        <EditStock handleChange={this.handleChange} closeAndEdit={this.closeAndEdit} />
                                        </i> */}

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