import React, { Component } from 'react';
import AddStock from '../AddStock/AddStock.js';
import M from 'materialize-css/dist/js/materialize.min.js';

export class Navbar extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });

    }
    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper #66bb6a green lighten-1">
                        <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>

                        <a href="#" class="brand-logo #66bb6a green lighten-1">𐆖</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down #66bb6a green lighten-1">
                            <li><a href="sass.html">Add Stock</a></li>
                            <li><a href="badges.html">Add ETF</a></li>
                            <li><a href="collapsible.html">Add Bond</a></li>
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" class="sidenav">
                    <li><div class="user-view">
                        <div class="background">
                            <img src="https://s3-media3.fl.yelpcdn.com/bphoto/p6Rz5m53Q_FB4V8bnwokEw/ls.jpg" />
                        </div>
                        <a href="#user"><img class="circle" src="https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/16551/thumb_mike_c.jpg" /></a>
                        <a href="#name"><span class="black-text name">Michael Clipper</span></a>
                        <a href="#email"><span class="black-text email">MClipper@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!">Profile</a></li>
                    <li>
                        <div class="switch">
                            <label>
                                Light
                                <input type="checkbox" />
                                <span class="lever"></span>
                                Dark
                            </label>
                        </div>
                    </li>
                    <li><a href="#!">Logout</a></li>
                    <li><div class="divider"></div></li>
                    
                    <li><a class="subheader">Investment Help</a></li>
                    {/* <li><AddStock /></li> */}
                    <li><a class="waves-effect" href="#!">Salary Calculator</a></li>
                    <li><a class="waves-effect" href="#!">Budget</a></li>
                </ul>
            </div>
        )
    }
}



export default Navbar
