import React, { useState } from "react";
import WarningBanner from "./WarningBanner"; // 파일명이 WarningBanner.jsx라면 "./WarningBanner"로 수정
import "./MainPage.css";

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const btnListener = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    };

    return (
        <div className="main-container">
            <div className="main-card">
                <WarningBanner warning={showWarning} />
                <button
                    className={`toggle-button ${showWarning ? "active" : ""}`}
                    onClick={btnListener}
                >
                    {showWarning ? "감추기" : "보이기"}
                </button>
            </div>
        </div>
    );
}

export default MainPage;