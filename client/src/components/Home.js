import React, {useState} from 'react';
import GoogleBooksGrid from './GoogleBooksGrid';
import Shelves from './Shelves';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography'
import { DragDropContext } from "react-beautiful-dnd";
import {useRecoilState} from 'recoil'
import {shelvesState} from '../atoms'


function Home(props) {
    const [query, setQuery] = useState("potter+subject:fiction")
    const [newShelves, setNewShelves] = useRecoilState(shelvesState)

    function handleChange(e, newValue){
        e.preventDefault()
        setQuery(newValue)
    }

    function handleOnDragEnd(result){
        fetch('/book_statuses/move', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                book_id: result.draggableId,
                shelf_from_id: result.source.droppableId,
                shelf_to_id: result.destination.droppableId
            })
        })
        .then(res => res.json())
        .then(data => {
            setNewShelves([...newShelves, data])
        })
    }

    return (
        <Grid container item
            sx={{ display: 'flex', flexGrow: 1 }}
            style={{
                width: "100%"
            }}
            spacing={3}
            padding={3}
        >
            <Grid container item xs={3} sm={3} md={3}> 
                <Grid item sx={{flexGrow: 1}}>
                    <p>Currently Reading</p>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="div">
                                Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Author
                            </Typography>
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Grid container item xs={9} sm={9} md={9}>
                <Grid item>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={query} onChange={handleChange}>
                            <Tab label="Fiction" value="potter+subject:fiction" />
                            <Tab label="Non-Fiction" value="london" />
                            <Tab label="Romance" value="love+subject:romance" />
                            <Tab label="Mystery" value="fear+subject:mystery" />
                            <Tab label="SciFi & Fantasy" value="fear+subject:dragon"/>
                        </Tabs>
                    </Box>
                    <GoogleBooksGrid query={query} />
                </Grid>
            </Grid>
            <Grid container item>
                <div>
                    <Shelves />
                </div>
            </Grid>
            </DragDropContext>
        </Grid>
    );
}

export default Home;