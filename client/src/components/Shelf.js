import React from 'react';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import ShelfBook from './ShelfBook'
import {Draggable} from "react-beautiful-dnd";

function Shelf({shelf, handleBookDetail, currentUser, handleAddToCart}) {
  
    return (
        <Container>
            <h3>{shelf.name}</h3>
            <Paper variant='outlined' sx={{ bgcolor: '#fff', minHeight: '100px', padding: 3}}>
                <Grid container spacing={1} padding={1}>
                    {shelf.books.map((book, index) => {
                        return (
                            <Draggable key={book.id.toString()} draggableId={book.id.toString()} index={index}>
                                {(provided) => (
                                    <Grid key={book.id} className='drop-list-item list-none text-red-400' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <ShelfBook key={book.id} book={book} handleBookDetail={handleBookDetail} currentUser={currentUser} handleAddToCart={handleAddToCart}/>
                                    </Grid>
                                )}
                            </Draggable>
                        )
                    })}
                </Grid>
            </Paper>
        </Container>
    );
}

export default Shelf;