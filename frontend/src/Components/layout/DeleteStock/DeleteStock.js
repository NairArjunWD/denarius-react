import React from 'react';

import { Button, Card, Row, Col, Modal } from 'react-materialize';

class DeleteStock extends Component {

    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }

    handleSubmit = (e) => {
        console.log("DELETE DELETE DELETE")
        e.preventDefault()
        this.props.closeAndDelete(this.state)
        props.deleteStock(props.stock.id)
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

                <a class="waves-effect waves-light btn modal-trigger" href="#modal2">Delete Stock</a>


                <div id="modal2" class="modal">
                    <div class="modal-content">
                        <h4>Delete Stock Card</h4>

                        <div class="row">
                            <form class="col s12" onSubmit={this.handleSubmit}>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <p>You are about to delete this stock card! Are you sure?</p>
                                    </div>
                                </div>
                                <div class="modal-footer">                             
                                    <button type="submit" class="modal-close waves-effect waves-green btn-flat" >Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteStock