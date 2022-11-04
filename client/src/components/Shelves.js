import React from 'react';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import {useRecoilState} from 'recoil'
import {shelvesState} from '../atoms'
import Shelf from './Shelf';
import {Droppable} from "react-beautiful-dnd";

function Shelves(props) {
    const [shelves, setShelves] = useRecoilState(shelvesState)

    return (
        <div>
            {shelves.map((shelf, index) => {
                return (
                    <Droppable key={shelf.id.toString()} droppableId={shelf.id.toString()} index={index}>
                        {(provided) => (
                            <div className='dropped-container'
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                            <Shelf key={shelf.id} shelf={shelf}/>
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