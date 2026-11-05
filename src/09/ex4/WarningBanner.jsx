import React from "react";
import "./MainPage.css";

function WarningBanner(props) {
    // warning prop이 false이면 아무것도 렌더링하지 않음
    if (!props.warning) {
        return null;
    }

    // warning prop이 true일 때 렌더링할 배너
    return (
        <div className="warning-banner">
            ⚠️ 경고! 현재 위험이 감지되었습니다.
        </div>
    );
}

export default WarningBanner;