import React from 'react';
import {useRecoilValue} from 'recoil'
import {fictionBooksState} from '../atoms'
import Book from './Book'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

function AllFictionBooks(props) {
    const fictionBooks = useRecoilValue(fictionBooksState)

    console.log(fictionBooks)

    return (
        <div>
            <p>Fiction Books</p>
            <Container>
                <Grid container spacing={1}>
                    {fictionBooks.items.map((book) => (
                        <Grid item md={4} key={book.id}>
                            <Book key={book.id} book={book}/>
                        </Grid>))
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default AllFictionBooks;