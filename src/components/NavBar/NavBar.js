import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/HenryMovie.png';
import './Navbar.css';

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="navBarLogo">
                <img src={Logo} alt="Logo App" />
            </div>

            <div className="navBarTitle">
                <h3>Henry Search Movie's</h3>
            </div>

            <div className="linkMenu">
                <ul className="list">
                    <li className="list-item">
                        <NavLink className="list-link" exact to="/" >Home</NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink className="list-link" to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}