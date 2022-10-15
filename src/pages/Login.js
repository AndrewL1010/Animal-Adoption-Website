import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../contexts/Context";
import { Link } from 'react-router-dom';
import bgVideo from '../clouds.mp4';
import login from '../login.module.css';

function Login() {
    // we use context to access setUsername to update the username when user logs in
    const { setUsername } = useContext(Context)


    return (
        <div className={login.loginpage}>
            <header className={login.loginheader}>
                <h2> Animal Adoption Center</h2>
                <Link className={login.documentation} to="/documentation">Documentation</Link>
            </header>
            <video autoPlay muted loop id={login.myVideo}>
                <source src={bgVideo} type="video/mp4"/>
            </video>

            <form className={login.loginarea}>

                <input className={login.credentials} type="username" placeholder="Username..." onChange={(e) => {
                    setUsername(e.target.value);
                }}>
                </input>
                <br></br>

                <input id={login.password} type="password" placeholder="Password..."
                >
                </input>
                <br></br><br></br>

                <div className={login.login}>
                    <Link className={login.loginlink} to="/home">Login</Link>


                </div>
                <div className={login.socials}>
                    <a className={login.youtube} href="https://www.youtube.com/channel/UCf7zml4ONm88_QgThtJP5vQ" target="_blank"></a>
                    <a className={login.twitter} href="https://twitter.com/elonmusk/with_replies" target="_blank"></a>
                    <a className={login.facebook} target="_blank" href="https://twitter.com/KingJames?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"></a>


                </div>

            </form>



        </div>

    );
}

export default Login;