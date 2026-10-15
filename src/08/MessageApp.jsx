import React, { useState } from 'react';

function MessageApp() {
    const [message, setMessage] = useState('');

    // 1. input 값이 변경될 때 실행될 이벤트 핸들러
    const handleChange = (e) => {
        setMessage(e.target.value); // 이벤트 객체(e)를 통해 입력된 값을 가져와 상태 업데이트
    };

    // 2. 버튼 클릭 시 실행될 이벤트 핸들러
    const handleClick = () => {
        alert(message); // 현재 상태값을 알림창으로 출력
        setMessage(''); // 알림창을 닫은 후 상태를 빈 문자열로 초기화
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>메시지 전송기</h1>

            <input
                type="text"
                placeholder="메시지를 입력하세요"
                // 3. 상태를 연결하고 이벤트를 바인딩
                value={message}
                onChange={handleChange}
            />

            <button onClick={handleClick}>
                전송
            </button>

            <p>미리보기: {message}</p>
        </div>
    );
}

export default MessageApp;