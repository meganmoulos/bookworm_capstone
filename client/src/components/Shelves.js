import React from 'react';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Shelf from './Shelf';
import {Droppable} from "react-beautiful-dnd";

function Shelves({newShelves, bookInfo, setBookInfo, handleBookDetail}) {

    return (
        <div>
            {newShelves.map((shelf, index) => {
                return (
                    <Droppable key={shelf.id.toString()} droppableId={shelf.id.toString()} index={index}>
                        {(provided) => (
                            <div className='dropped-container'
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                            <Shelf key={shelf.id} shelf={shelf} bookInfo={bookInfo} setBookInfo={setBookInfo} handleBookDetail={handleBookDetail}/>
                            {provided.placeholder}
                            </div>
                            )
                        }
                    </Droppable>
                )
            })}
        </div>
    );
}

export default Shelves;