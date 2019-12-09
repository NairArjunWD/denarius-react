import React, { Component } from 'react'

class AddStock extends Component {
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

                <a class="waves-effect waves-light btn modal-trigger" href="#modal2">Add Stock</a>


            <div id="modal2" class="modal">
                <div class="modal-content">
                    <h4>Add Stock Card</h4>
                    
                    <div class="row">
                            <form class="col s12" onSubmit={(e) => this.props.closeAndAdd(e, this.state)}>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="input_text1" type="text" data-length="10" name="name" placeholder="Name" onChange={this.props.handleChange}/>
                                        <input placeholder='comapny' id="input_text2" type="text" data-length="10" name="company" placeholder="Company" onChange={this.props.handleChange}/>
                                        <input id="input_text3" type="number" data-length="10" name="amount" placeholder="Amount" onChange={this.props.handleChange}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="modal-close waves-effect waves-green btn-flat">Agree</button>
                </div>
            </div>
            </div>
        )
    }
}

export default AddStock
