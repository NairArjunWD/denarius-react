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
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="input_text1" type="text" data-length="10" value={this.state.name}/>
                                    <label for="input_text1">name</label>
                                        <input placeholder='first name' id="input_text2" type="text" data-length="10" value={this.state.company}/>
                                    <label for="input_text2">company</label>
                                        <input id="input_text3" type="float" data-length="10" value={this.state.amount}/>
                                    <label for="input_text3">amount</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
            </div>
        )
    }
}

export default AddStock
