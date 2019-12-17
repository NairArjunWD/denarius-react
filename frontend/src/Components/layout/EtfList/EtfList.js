// import React from 'react'
// import { Button, Card, Row, Col } from 'react-materialize';
// import M from "materialize-css/dist/js/materialize.min.js"
// import { Link } from 'react-router-dom'
// import EditEtf from '../EditEtf/EditEtf.js'


// // handleChange = (e) => {
// //     this.setState({ [e.currentTarget.name]: e.currentTarget.value })
// // }

// const EtfList = (props) => {
//     const etfs = props.etfs.map((etf) => {
//         return (
//             <React.Fragment >
                
//                 <div >
//                     <Card>
//                         <div class="row #66bb6a yellow lighten-3">
//                             <div class="col s12 m4">
//                                 <div class="card #66bb6a yellow lighten-1">
//                                     <div class="card-content white-text" key={etf.id}>

//                                         <span class="card-title">{etf.name}</span>

//                                         <ul>
//                                             <li>
//                                                 {etf.company}
//                                             </li>
//                                             <li>
//                                                 {etf.amount}
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div class="card-action">
//                                         <a href="#"><i class="material-icons">photo_size_select_large
// </i></a>
//                                         <EditEtf etf={etf} />
                                        

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
//             {etfs}
//         </div>
//     )
// }

// export default EtfList