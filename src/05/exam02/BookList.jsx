import React from "react";
import Book from "./Book";
import "./BookList.css";

const books= [
    {
        title: "처음 만난 리액트",
        author: "김소플",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8GieFzlG7PRPOyNyiJ_UBFamfwH4ItLPi-yFN58M0w&s=10"
    },
    {
        title: "데이터베이스실습",
        author: "박우창",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaV-iy9liyJUaK3CJdza04yBxYM7Rm9cCUcJVQdpB9g&s=10"
    },
    {
        title: "난생 처음 자바",
        author: "우재남",
        coverImage: "https://cdn-prod.hanbit.co.kr/books/B5395686917_l.jpg"
    },
    {
        title: "난생 처음 c언어",
        author: "김화수",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8Oezy8mbqlW-yKkrOEmkXtHMmeOIxLba8kSh9KMzug&s=10"
    },
    {
        title: "난생 처음 파이썬",
        author: "우재남",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSot1GuCYqK62daMhT-Op_P5Ozo1teCCcK_91RlbEogTA&s=10"
    }
]

function BookList() {
    return(
        <div className={"bookListWrapper"}>
            {books.map((book) => {
                return(
                    <Book
                        title={book.title}
                        author={book.author}
                        coverImage={book.coverImage}
                    />
                );
            })}
        </div>
    );
}

export default BookList