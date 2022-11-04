import React from 'react';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import ShelfBook from './ShelfBook'


function Shelf({shelf}) {


    return (
        <div>
            <Container>
                <p>{shelf.name}</p>
                <Grid container spacing={1} padding={1}>
                    {shelf.books.map((book) => 
                        <Grid item md={4} key={book.id}>
                            <ShelfBook key={book.id} book={book}/>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default Shelf;