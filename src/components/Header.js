
import React, { useState, useContext } from "react";
import { Context } from "../contexts/Context";
import { Link } from 'react-router-dom';
import headercss from '../header.module.css';
function Header() {
    const { username } = useContext(Context);
    // the username state was updated from the login page, and is used to display the name of the user at the header
    return (
        <header>
            <h2 className={headercss.headerwelcome}> Welcome, {username}</h2>
            <Link className={headercss.documentation} to="/documentation">Documentation</Link>
            <Link className={headercss.signout} to="/">Sign Out</Link>
        </header>





    )
}

export default Header;


