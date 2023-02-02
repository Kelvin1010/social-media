import React from 'react'
import Login from '../Login/Login';
import Logo from "../../image/logo.png";
import '../../styles/Auth.css';
import SignUp from '../signup/SignUp';

function Auth() {
    return (
        <div className="auth">
            <div className="a_left">
                <img src={Logo} alt="" />
                <div className="Webname">
                <h1>Kelvin Media</h1>
                <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
            <SignUp />
        </div>
    )
}

export default Auth