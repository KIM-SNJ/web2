import React from "react";
import "./AttendanceBook.css"

const students = [{id:0, name:"Enna"}, {id:1, name:"Steve"}, {id:2, name:"Bill"}, {id:3, name:"Jeff"}];

function AttendanceBook() {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;