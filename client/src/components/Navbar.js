import React from 'react';
import {NavLink} from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <NavLink
                to='/'
                exact
            >
                <p>BOOKWORM</p>
            </NavLink>
            <NavLink
                to='/shelves'
                exact
            >
                <p>My Shelves</p>
            </NavLink>
            <NavLink
                to='/cart'
                exact
            >
                <p>Shopping Cart</p>
            </NavLink>
            <NavLink
                to='/user'
                exact
            >
                <p>User</p>
            </NavLink>
        </div>
    );
}

export default Navbar;