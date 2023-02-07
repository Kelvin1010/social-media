import React, { useState } from 'react'
import Login from '../Login/Login';
import Logo from "../../image/logokw.png";
import '../../styles/Auth.css';
import SignUp from '../signup/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn, signUp } from '../../actions/AuthActions';

function Auth() {

    const initialState = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpassword: "",
    };

    const loading = useSelector((state) => state.authReducer.loading);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignUp, setIsSignUp] = useState(false);

    const [data, setData] = useState(initialState);

    const [ confirmpassword, setConfirmPassword] = useState(true);

    // Reset Form
    const resetForm = () => {
        setData(initialState);
        setConfirmPassword(confirmpassword);
    };

    // handle Change in input
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    // Form Submission
    const handleSubmit = (e) => {
        setConfirmPassword(true);
        e.preventDefault();
        if (isSignUp) {
        data.password === data.confirmpass
            ? dispatch(signUp(data, navigate))
            : setConfirmPassword(false);
        } else {
        dispatch(logIn(data, navigate));
        }
    };

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
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                <h3>{isSignUp ? "Register" : "Login"}</h3>
                {isSignUp && (
                    <div>
                    <input
                        required
                        type="text"
                        placeholder="First Name"
                        className="infoInput"
                        name="firstname"
                        value={data.firstname}
                        onChange={handleChange}
                    />
                    <input
                        required
                        type="text"
                        placeholder="Last Name"
                        className="infoInput"
                        name="lastname"
                        value={data.lastname}
                        onChange={handleChange}
                    />
                    </div>
                )}

                <div>
                    <input
                    required
                    type="text"
                    placeholder="Username"
                    className="infoInput"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                    required
                    type="password"
                    className="infoInput"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    />
                    {isSignUp && (
                    <input
                        required
                        type="password"
                        className="infoInput"
                        name="confirmpass"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                    />
                    )}
                </div>

                <span
                    style={{
                    color: "red",
                    fontSize: "12px",
                    alignSelf: "flex-end",
                    marginRight: "5px",
                    display: confirmpassword ? "none" : "block",
                    }}
                >
                    *Confirm password is not same
                </span>
                <div>
                    <span
                    style={{
                        fontSize: "12px",
                        cursor: "pointer",
                        textDecoration: "underline",
                    }}
                    onClick={() => {
                        resetForm();
                        setIsSignUp((prev) => !prev);
                    }}
                    >
                    {isSignUp
                        ? "Already have an account Login"
                        : "Don't have an account Sign up"}
                    </span>
                    <button
                    className="button infoButton"
                    type="Submit"
                    disabled={loading}
                    >
                    {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Auth