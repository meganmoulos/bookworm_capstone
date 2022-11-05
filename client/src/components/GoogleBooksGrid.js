import React from 'react';
import {useRecoilValue} from 'recoil'
import {googleBooksState} from '../atoms'
import GoogleBook from './GoogleBook'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import {Droppable, Draggable} from "react-beautiful-dnd";

function GoogleBooksGrid({query}) {
    const googleBooks = useRecoilValue(googleBooksState(query))

    
    return (
        <Container>
            <Container>
                <Droppable key="nodrop" droppableId="googlegrid" index="0">          
                    {(provided) => (
                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <Grid container spacing={1} padding={1}>
                                {googleBooks.items.map((book, index) => {
                                    return (
                                        <Draggable key={book.id.toString()} draggableId={book.id.toString()} index={index}>
                                            {(provided) => (
                                                (<Grid item md={4} key={book.id} className='drop-list-item list-none text-red-400' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <GoogleBook key={book.id} book={book}/>
                                                </Grid>
                                                )
                                            )}
                                        </Draggable>
                                    )
                                })}
                            </Grid>
                            {provided.placeholder}
                        </div>
                )}
                
                </Droppable>
            </Container>
        </Container>
    );
}

export default GoogleBooksGrid;
