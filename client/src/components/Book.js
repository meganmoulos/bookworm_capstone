import React from 'react';

function Book({book}) {

    return (
        <div>
            <p>{book.volumeInfo.title}</p>
            <p>{book.volumeInfo.authors}</p>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
        </div>
    );
}

export default Book;