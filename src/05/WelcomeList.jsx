import React from "react";
import Welcome from "./Welcome";
import "./WelcomeList.css"; // 작성한 CSS 파일 임포트

function WelcomeList() {
    return (
        <div className="welcome-list">
            <Welcome name="김인공" colorClass="bg-1"/>
            <Welcome name="박폴리" colorClass="bg-2"/>
            <Welcome name="이정수" colorClass="bg-3"/>
        </div>
    );
}

export default WelcomeList;