import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper #66bb6a green lighten-1">
                        <a href="#" class="brand-logo #66bb6a green lighten-1">𐆖</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down #66bb6a green lighten-1">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
