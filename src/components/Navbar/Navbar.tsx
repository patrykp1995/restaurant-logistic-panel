import React from "react";
import './Navbar.scss'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="navbar-container">

                <NavLink to="/" className="navbar-brand"><p>Home Page</p></NavLink>
                <NavLink to="/menu" className="navbar-brand"><p>Menu</p></NavLink>
                <NavLink to="/summary" className="navbar-brand"><p>Summary of the day</p></NavLink>
                <NavLink to="/add" className="navbar-brand"><p>Add to menu</p></NavLink>
                <NavLink to="/contact" className="navbar-brand"><p>Contact</p></NavLink>
            </div>
        </nav>
    )
}

export default Navbar;