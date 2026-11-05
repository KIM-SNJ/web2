import React, { useState } from "react";
import "./NameForm.css"; // CSS 임포트

function NameForm(props) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 이름: ' + value);
        event.preventDefault();
    }

    return(
        <form className="name-form" onSubmit={handleSubmit}>
            <label>
                이름
                <input
                    type={"text"}
                    value={value}
                    onChange={handleChange}
                    placeholder="이름을 입력하세요"
                />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default NameForm;