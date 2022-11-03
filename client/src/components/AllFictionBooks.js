import React from 'react';
import {useRecoilValue} from 'recoil'
import {fictionBooksState} from '../atoms'
import Book from './Book'
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'

function AllFictionBooks(props) {
    const fictionBooks = useRecoilValue(fictionBooksState)

    console.log(fictionBooks)

    return (
        <div>
            <h1>Fiction Books</h1>
            <Grid container spacing={2}>
                <Grid xs={8}>
                    <Item>
                    {fictionBooks.items.map(book => <Book key={book.id} book={book}/>)}
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default AllFictionBooks;