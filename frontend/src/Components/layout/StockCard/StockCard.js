import React, { Component } from 'react';

class StockCard extends Component {

    render() {
        return (
            <div class="row">
                <div class="col s12 m4">
                    <div class="card #66bb6a green lighten-1">
                        <div class="card-content white-text">
                            <span class="card-title">APPL</span>
                            <ul>
                                <li>
                                    154.32
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