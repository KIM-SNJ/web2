import React from "react";

function LogOutButton(props) {
    return (
        <button className="neon-btn logout-btn" onClick={props.onClick}>
            로그아웃
        </button>
    );
}

export default LogOutButton;