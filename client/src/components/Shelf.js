import React from 'react';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import ShelfBook from './ShelfBook'
import {Draggable} from "react-beautiful-dnd";

function Shelf({shelf, bookInfo, setBookInfo}) {
  
    return (
        <div>
            <Container>
                <h3>{shelf.name}</h3>
                <Grid container spacing={1} padding={1}>
                    {shelf.books.map((book, index) => {
                        return (
                            <Draggable key={book.id.toString()} draggableId={book.id.toString()} index={index}>
                                {(provided) => (
                                    <Grid item md={4} key={book.id} className='drop-list-item list-none text-red-400' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <ShelfBook key={book.id} book={book} bookInfo={bookInfo} setBookInfo={setBookInfo}/>
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