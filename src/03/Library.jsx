import React from "react";
import Book from "./Book.jsx"

function Library() {
    return(
        <div>
            <Book name="처음 만나는 Jaba" numOfPage={300} imgUrl="https://image.yes24.com/goods/38097960/XL"/>
            <Book name="처음 만난 AWS" numOfPage={200} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiSLLxecjcdZPjhhyZeo_k0P90o-_u4SVdy7swx9UtSg&s=10"/>
            <Book name="처음 만난 리액트" numOfPage={500} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8GieFzlG7PRPOyNyiJ_UBFamfwH4ItLPi-yFN58M0w&s=10"/>
            <Book name="처음 만나는 자바스크립트" numOfPage={500} imgUrl="https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791185890777.jpg?t=2978948"/>
            <Book name="처음 만나는 HTML/CSS" numOfPage={500} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQn6FDgeoWbQyI_rXbgFjQtalgeq1OaBnFtyhjZlrw6w&s"/>
        </div>
    );
}

export default Library;