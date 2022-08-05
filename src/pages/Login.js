import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../contexts/Context";
import { Link } from 'react-router-dom';
function Login() {
    // we use context to access setUsername to update the username when user logs in
    const { setUsername } = useContext(Context)


    return (
        <div className="login-page">
            <h2 className="login-header"><Link className="documentation" to="/documentation">Documentation</Link> Animal Adoption Center</h2>



            <form>
                <fieldset className="login-area">
                <input className="credentials" type="username" placeholder="Username..." onChange={(e) => {
                    setUsername(e.target.value);
                }}>
                </input>
                <br></br>

                <input id="password" className="credentials" type="password" placeholder="Password..."
                >
                </input>
                <br></br><br></br>

                <Link className="login" to="/home">Login</Link>
                </fieldset>
            </form>



        </div>

    );
}

export default Login;