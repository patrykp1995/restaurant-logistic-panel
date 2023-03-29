import React from "react";
import './Navbar.scss'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="navbar-container">

                <Link to="/" className="navbar-brand"><p>Home Page</p></Link>
                <Link to="/menu" className="navbar-brand"><p>Menu</p></Link>
                <Link to="/summary" className="navbar-brand"><p>Summary of the day</p></Link>
                <Link to="/contact" className="navbar-brand"><p>Contact</p></Link>
            </div>
        </nav>
    )
}

export default Navbar;