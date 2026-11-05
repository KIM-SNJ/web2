import React from "react";
import "./AttendanceCardBook.css"; // CSS 파일 임포트

const students = [
    {
        id: 1,
        name: "장원영",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: "https://cdn.topstarnews.net/news/photo/202412/15585952_1471967_2613.jpg"
    },
    {
        id: 2,
        name: "안유진",
        grade: 2,
        major: "메카트로닉스",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ach9EGJ_wZcvHiMCvb28GU68vXlvB0DYTZ4IBgdqPw&s=10"
    },
    {
        id: 3,
        name: "김리즈",
        grade: 1,
        major: "빅데이터분석",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3n8Aifk6c92_JCBn7IS_qufqi1Ez_TRBD2hU2mS1aw3pdApAodBpcDwE&s=10"
    },
    {
        id: 4,
        name: "박레이",
        grade: 3,
        major: "친환경소재",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0zYNnBSA2o-0R7OgVhNN83DBe_Nbp03E8follHkC5g&s=10"
    },
    {
        id: 5,
        name: "이가을",
        grade: 4,
        major: "시각디자인",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNnd5IV4lQitP-XCNlARuivrNWGyfP6cdCsrhw-DbAg&s=10"
    },
    {
        id: 6,
        name: "최이서",
        grade: 1,
        major: "메타버스콘텐츠",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnr0FvrmWVx3dr-kkSPE5AgXkHBUJuXpior7RwrntLzw&s=10"
    }
];

function AttendanceCardBook() {
    return (
        <div className="attendance-container">
            <header className="attendance-header">
                <span className="subtitle">2026 ACADEMIC YEAR</span>
                <h2 className="title">학생 출석부</h2>
                <p className="count">총 인원 <strong>{students.length}명</strong></p>
            </header>

            <div className="card-grid">
                {students.map((student) => (
                    <div className="student-card" key={student.id}>
                        <div className="status-badge">출석완료</div>
                        <div className="avatar-wrapper">
                            <img
                                src={student.avatar}
                                alt={student.name}
                                className="student-avatar"
                            />
                        </div>
                        <div className="student-info">
                            <h3 className="student-name">{student.name}</h3>
                            <div className="student-tags">
                                <span className="grade-tag">{student.grade}학년</span>
                                <span className="major-tag">{student.major}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AttendanceCardBook;