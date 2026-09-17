import React from "react";
import Avatar from "./Avatar";
import "./UserInfo.css"

function UserInfo(props) {
    return (
        <div>
            <Avatar user={props.user}/>
            <div className={"user-info-name"}>
                {props.user.name}
            </div>
        </div>
    );
}

export default UserInfo