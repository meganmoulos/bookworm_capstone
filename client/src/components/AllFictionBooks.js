import React from 'react';
import {useRecoilValue} from 'recoil'
import {fictionBooksState} from '../atoms'
import Book from './Book'

function AllFictionBooks(props) {
    const fictionBooks = useRecoilValue(fictionBooksState)

    console.log(fictionBooks)

    return (
        <div>
            <h1>Fiction Books</h1>
            {fictionBooks.items.map(book => <Book key={book.id} book={book}/>)}
        </div>
    );
}

export default AllFictionBooks;