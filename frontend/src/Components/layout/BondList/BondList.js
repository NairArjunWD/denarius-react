// import React from 'react'
// import { Button, Card, Row, Col } from 'react-materialize';
// import M from "materialize-css/dist/js/materialize.min.js"
// import { Link } from 'react-router-dom'
// import EditBond from '../EditBond/EditBond.js'


// // handleChange = (e) => {
// //     this.setState({ [e.currentTarget.name]: e.currentTarget.value })
// // }

// const BondList = (props) => {
//     const bonds = props.bonds.map((bond) => {
//         return (
//             <React.Fragment >
//                 <div >
//                     <Card>
//                         <div class="row #66bb6a blue lighten-3">
//                             <div class="col s12 m4">
//                                 <div class="card #66bb6a blue lighten-1">
//                                     <div class="card-content white-text" key={bond.id}>

//                                         <span class="card-title">{bond.name}</span>

//                                         <ul>
//                                             <li>
//                                                 {bond.company}
//                                             </li>
//                                             <li>
//                                                 {bond.amount}
//                                             </li>
//                                             <li>
//                                                 {bond.years}
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div class="card-action">
//                                         <a href="#"><i class="material-icons">photo_size_select_large
// </i></a>
//                                         <EditBond bond={bond} />


//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Card>
//                 </div>
//             </React.Fragment >
//         )
//     })

//     return (
//         <div>
//             {bonds}
//         </div>
//     )
// }

// export default BondList