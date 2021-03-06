import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Navbar extends Component {
    
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Register">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar