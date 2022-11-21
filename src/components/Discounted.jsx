import React from "react";
import {books} from '../data'
import Book from "./ui/Book";

const Discounted = () => {
    return(
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discounted <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {books
                        .filter(book => book.salePrice > 0) //filtering through data to check if it has a salePrice
                        .slice(0, 8)    //Cap it at 8 books
                        .map((book) => (    //Map through each element in the array
                        <Book book = {book} key={book.id}/>     //Turn each element into the html tag '<Book>'
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Discounted;