
import React, { useState, useContext } from "react";
import { Context } from "../contexts/Context";
import { Link } from 'react-router-dom';
function Header() {
    const { username } = useContext(Context);
    // the username state was updated from the login page, and is used to display the name of the user at the header
    return (
        <h2 className='website-header'><Link className="documentation" to="/documentation">Documentation</Link> Welcome, {username}  <Link id="sign-out" to="/">Sign Out</Link> </h2>
    )
}

export default Header;


