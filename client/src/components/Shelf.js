import React from 'react';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import ShelfBook from './ShelfBook'
import {Draggable} from "react-beautiful-dnd";

function Shelf({shelf}) {
  
    return (
        <div>
            <Container>
                <p>{shelf.name}</p>
                <Grid container spacing={1} padding={1}>
                    {shelf.books.map((book, index) => {
                        return (
                            <Draggable key={book.id.toString()} draggableId={book.id.toString()} index={index}>
                                {(provided) => (
                                    <Grid item md={4} key={book.id} className='drop-list-item list-none text-red-400' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <ShelfBook key={book.id} book={book}/>
                                    </Grid>
                                )}
                            </Draggable>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    );
}

export default Shelf;