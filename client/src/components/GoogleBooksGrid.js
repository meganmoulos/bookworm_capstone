import React from 'react';
import {useRecoilValue} from 'recoil'
import {googleBooksState} from '../atoms'
import GoogleBook from './GoogleBook'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

function GoogleBooksGrid({query}) {
    const googleBooks = useRecoilValue(googleBooksState(query))

    return (
        <Container>
            <Container>
                <Grid container spacing={1} padding={1}>
                    {googleBooks.items.map((book) => (
                        <Grid item md={4} key={book.id}>
                            <GoogleBook key={book.id} book={book}/>
                        </Grid>)).slice(0, 3)
                    }
                </Grid>
            </Container>
        </Container>
    );
}

export default GoogleBooksGrid;