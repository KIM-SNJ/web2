import React, { useState } from "react";
import Greeting from "../ex1/Greeting";
import LoginButton from "../ex2/LogInButton";
import LogOutButton from "../ex2/LogOutButton";
import "./ex3/Mailbox";
import "./LogInControl.css";

function LogInControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => {
        setIsLoggedIn(true);
    };

    const logOutClickListener = () => {
        setIsLoggedIn(false);
    };

    let button;

    button = isLoggedIn ? <LogOutButton onClick={logOutClickListener} /> : <LoginButton onClick={logInClickListener} />;

    return (
        <div className={`auth-wrapper ${isLoggedIn ? "logged-in" : "logged-out"}`}>
            <div className="auth-card">
                <div className="status-badge">
                    <span className="status-dot"></span>
                    <span>{isLoggedIn ? "ONLINE" : "OFFLINE"}</span>
                </div>
                <div className="greeting-box">
                    <Greeting isLoggedIn={isLoggedIn} />
                </div>
                {button}
            </div>
        </div>
    );
}

export default LogInControl;