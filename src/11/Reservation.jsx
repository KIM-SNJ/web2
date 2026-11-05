import React, { useState } from "react";
import "./Reservation.css"; // CSS 파일 불러오기

function Reservation(props) {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2); // 초기값을 숫자(2)로 변경

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`아침 식사 여부: ${haveBreakfast ? "예" : "아니오"}, 방문객 수: ${numberOfGuest}명`);
    };

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <h2 className="form-title">숙소 예약</h2>

            <label className="form-group">
                <span>아침식사 여부</span>
                <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={haveBreakfast}
                    onChange={(event) => {
                        setHaveBreakfast(event.target.checked);
                    }}
                />
            </label>

            <label className="form-group">
                <span>방문자 수</span>
                <input
                    type="number"
                    className="number-input"
                    min="1"
                    value={numberOfGuest} // checked 대신 value 사용
                    onChange={(event) => {
                        setNumberOfGuest(event.target.value);
                    }}
                />
            </label>

            <button type="submit" className="submit-btn">
                제출하기
            </button>
        </form>
    );
}

export default Reservation;