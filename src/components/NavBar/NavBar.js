import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/HenryMovie.png';

import './Navbar.css';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="Elemento imagen">
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>

            <div className="Elemento titulo">
                <h3>Henry Search Movie's</h3>
            </div>

            <div className="Elemento linkMenu">
                {/* <nav> */}
                    <ul className="list">
                        <li className="list-item">
                            <NavLink className="list-link" exact to="/" >Home</NavLink>
                        </li>
                        <li className="list-item">
                            <NavLink className="list-link" to="/favs" >Favoritas</NavLink>
                        </li>
                    </ul>
                {/* </nav> */}
            </div>
        </div>
    )
}