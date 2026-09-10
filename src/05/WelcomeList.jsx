import React from "react";
import Welcome from "./Welcome";
import "./WelcomeList.css"; // 작성한 CSS 파일 임포트

function WelcomeList() {
    return (
        <div className="welcome-list">
            <Welcome name="김인공"></Welcome><br/>
            <Welcome name="박폴리"></Welcome><br/>
            <Welcome name="이정수"></Welcome><br/>
        </div>
    );
}

export default WelcomeList;