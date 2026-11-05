import React, { useState } from "react";
import Greeting from "../ex1/Greeting";
import LoginButton from "../ex2/LogInButton";
import LogOutButton from "../ex2/LogOutButton";
import "./Mailbox.css";

function Mailbox(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => {
        setIsLoggedIn(true);
    };

    const logOutClickListener = () => {
        setIsLoggedIn(false);
    };

    let button;

    button = isLoggedIn ? <LogOutButton onClick={logOutClickListener} /> : <LoginButton onClick={logInClickListener} />;

    const unreadMessages = 0;

    return(
        <div className={`mailbox-container ${isLoggedIn ? "logged-in" : "logged-out"}`}>
            <div className="mailbox-card">
                <div className="status-badge">
                    <span className="status-dot"></span>
                    <span>{isLoggedIn ? "ONLINE" : "OFFLINE"}</span>
                </div>
                <div className="greeting-box">
                    <Greeting isLoggedIn={isLoggedIn} />
                </div>
                <h1 className="mailbox-title">안녕하세요!</h1>
                {unreadMessages > 0 ? (
                    <h2 className="mailbox-alert positive">
                        현재 <span className="highlight">{unreadMessages}</span>개의 읽지 않은 메시지가 있습니다.
                    </h2>
                ) : (
                    <h2 className="mailbox-alert empty">
                        모든 메시지를 읽으셨습니다. 즐거운 하루 되세요! ✨
                    </h2>
                )}
                {button}
            </div>
        </div>
    );
}

export default Mailbox;