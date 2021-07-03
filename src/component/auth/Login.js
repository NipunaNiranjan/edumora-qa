import React, { useState } from "react";
import "./Login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { auth, provider, providerfb } from "../../firebase";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const SignIn = () => {
        auth.signInWithPopup(provider).catch((e) => alert(e.message));
        console.log(auth);
    };

    const SignInByFb = () => {
        auth.signInWithPopup(providerfb).catch((e) => alert(e.message));
        console.log(auth);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
        }).catch((e) => alert(e.message));
        setEmail("")
        setPassword("")
    };

    const handleRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                console.log(auth);
            }
        }).catch((e) => alert(e.message));
        setEmail("")
        setPassword("")

    };


    return (
        <div className="login">
            <div className="login_container">
                <div className="login_logonew">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mkuf2RxAaLyRRnvDGJIubbtoNaYfKYa8uA&usqp=CAU"
                        alt="logo"
                    />
                </div>
                <div className="login_desc">
                    <p>Science is your Treasure</p>
                    <p style={{ color: "royalblue", fontSize: "25px" }}>
                    </p>

                </div>
                <div className="login_auth">
                    <div className="login_authOptions">
                        <div className="login_authOption">
                            <img
                                className="login_googleAuth"
                                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                                alt=""
                            />
                            <p onClick={SignIn}>Continue With Google</p>
                        </div>
                        <div className="login_authOption">
                            <img
                                className="login_googleAuth"
                                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                                alt=""
                            />
                            <p onClick={SignInByFb}>Continue With Facebook </p>
                        </div>
                        <div className="login_authDesc">
                            <p>
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                    Sign Up With Email
                                </span>
                                . By continuing you indicate that you have read and agree to
                                our
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                    Terms of Service{" "}
                                </span>
                                and{" "}
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                    Privacy Policy
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="login_emailPass">
                        <div className="login_label">
                            <h4>Login</h4>
                        </div>
                        <div className="login_inputFields">
                            <div className="login_inputField">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="login_inputField">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="login_forgButt">
                            <small>Forgot Password?</small>
                            <button onClick={handleLogin}>Login</button>
                        </div>
                        <button onClick={handleRegister}>Register</button>
                    </div>
                </div>
                <div className="login_lang">
                    <p>Tamil</p>
                    <ArrowForwardIosIcon fontSize="small" />
                </div>
                <div className="login_footer">
                    <p>About</p>
                    <p>Languages</p>
                    <p>Careers</p>
                    <p>Businesses</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
}

export default Login;