import React from 'react';
import '../../styles/Log_Sign.css';
import '../../styles/Auth.css';
import Logo from "../../image/logo.png";

function Login() {
    return (
        <div className="auth">
            <div className="a_left">
                <img src={Logo} alt="" />
                <div className="Webname">
                <h1>Kelvin Media</h1>
                <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
            <div className="a-right">
                <form className="infoForm authForm">
                <h3>Log In</h3>
        
                <div>
                    <input
                    type="text"
                    placeholder="Username"
                    className="infoInput"
                    name="username"
                    />
                </div>
        
                <div>
                    <input
                    type="password"
                    className="infoInput"
                    placeholder="Password"
                    name="password"
                    />
                </div>
        
                <div>
                    <span style={{ fontSize: "12px" }}>
                        Don't have an account Sign up
                    </span>
                    <button className="button infoButton">Login</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login