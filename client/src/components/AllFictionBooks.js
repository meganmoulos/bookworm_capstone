import React from 'react';
import {useRecoilValue} from 'recoil'
import {fictionBooksState} from '../atoms'
import Book from './Book'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

function AllFictionBooks(props) {
    const fictionBooks = useRecoilValue(fictionBooksState)

    return (
        <Container>
            <Container>
                <Grid container spacing={1} padding={1}>
                    {fictionBooks.items.map((book) => (
                        <Grid item md={4} key={book.id}>
                            <Book key={book.id} book={book}/>
                        </Grid>)).slice(0, 3)
                    }
                </Grid>
            </Container>
        </Container>
    );
}

export default AllFictionBooks;