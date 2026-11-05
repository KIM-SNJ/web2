import React from "react";

function LoginButton(props) {
    return (
        <button className="neon-btn login-btn" onClick={props.onClick}>
            로그인
        </button>
    );
}

export default LoginButton;