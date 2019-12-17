// import React, { Component } from 'react'

// class AddBond extends Component {
//     constructor() {
//         super();

//         this.state = {
//             name: '',
//             company: '',
//             amount: '',
//             years: '',
//         }
//     }
//     handleChange = (e) => {
//         this.setState({ [e.currentTarget.name]: e.currentTarget.value })
//     }

//     handleSubmit = (e) => {
//         console.log("HELLO HELLO HELLO")
//         e.preventDefault()
//         this.props.closeAndAdd(this.state)
//     }

//     componentDidMount() {
//         const M = window.M;
//         document.addEventListener('DOMContentLoaded', function () {
//             var elems = document.querySelectorAll('.modal');
//             var instances = M.Modal.init(elems, {});
//         });
//     }

//     render() {
//         return (
//             <div>

//                 <a class="waves-effect waves-light btn modal-trigger" href="#modal12">Add Bond</a>


//                 <div id="modal12" class="modal">
//                     <div class="modal-content">
//                         <h4>Add Bond Card</h4>

//                         <div class="row">
//                             <form class="col s12" onSubmit={this.handleSubmit}>
//                                 <div class="row">
//                                     <div class="input-field col s6">
//                                         <input id="input_text14" type="text" data-length="10" name="name" placeholder="Name" onChange={this.handleChange} />
//                                         <input placeholder='comapny' id="input_text2" type="text" data-length="10" name="company" placeholder="Company" onChange={this.handleChange} />
//                                         <input placeholder='country' id="input_text2" type="text" data-length="10" name="country" placeholder="Country" onChange={this.handleChange} />
//                                         <input id="input_text15" type="number" data-length="10" name="amount" placeholder="Amount" onChange={this.handleChange} />
//                                     </div>
//                                 </div>
//                                 <div class="modal-footer">
//                                     <button type="submit" class="modal-close waves-effect waves-green btn-flat">Agree</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default AddBond
