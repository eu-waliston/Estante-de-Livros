import React, { useContext } from "react";
import _ from 'lodash';
import Book from "./Book";
import BooksContext from "../context/BookContext";

const BookList = () => {
    const {books, setBooks} = useContext(BooksContext);

    const handleRemoveBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    }

    return (
        <React.Fragment>
            <div className="book-list">
                {!_.isEmpty(books) ? (books.map((book) => ( <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} /> )) ) : ( <p className="message"><span>No books </span> available, Plaese add some books!</p>)}
            </div>
        </React.Fragment>
    )
}

export default BookList;