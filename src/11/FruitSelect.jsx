import React, { useState } from "react";
import "./FruitSelect.css"; // CSS 임포트

function FruitSelect(props) {
    const [value, setValue] = useState('apple');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('선택한 과일: ' + value);
        event.preventDefault();
    }

    return(
        <form className="fruit-form">
            <label>
                과일을 선택하세요:
                <select value={value} onChange={handleChange}>
                    <option value={"apple"}>🍎 사과</option>
                    <option value={"banana"}>🍌 바나나</option>
                    <option value={"grapes"}>🍇 포도</option>
                    <option value={"melon"}>🍈 참외</option>
                </select>
            </label>
            <button type="submit" onClick={handleSubmit}>제출</button>
        </form>
    );
}

export default FruitSelect;