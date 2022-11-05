import React, {useState, useEffect} from 'react';
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
import {fetchShelves} from '../atoms'
import {useRecoilValue} from 'recoil'
import {googleBooksState} from '../atoms'
import {currentlyReading} from '../atoms'

function Home({bookInfo, setBookInfo}) {
    const [query, setQuery] = useState("potter+subject:fiction")
    const [newShelves, setNewShelves] = useState([])
    const googleBooks = useRecoilValue(googleBooksState(query))
    const currentBook = useRecoilValue(currentlyReading)


    function handleChange(e, newValue){
        e.preventDefault()
        setQuery(newValue)
    }

    useEffect(() => {  
        async function fetchData() {
            setNewShelves(await fetchShelves())
        }
        fetchData()
    }, [])


    // If the book is being saved from Google API save to backend, if it is just moving from one shelf to another it doesn't need to be saved 

    function handleOnDragEnd(result){
        // If dragged outside of a droppable
        if (result.destination == null){
            return
        }

        // If dropping in the same grid
        if (result.source.droppableId === result.destination.droppableId){
            return
        }
        
        // If moving from googleBooks grid to shelf for the first time
        if (result.source.droppableId === 'googlegrid'){
            console.log("google book")
            fetch('/books', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    book: googleBooks.items[result.source.index],
                    shelf: result.destination.droppableId
                })
            })
            .then(res => res.json())
            .then(data => {
                setNewShelves(data)
            })
        } else {
            // If moving between shelves
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
                setNewShelves(data)
        })
        }
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
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
                        <Shelves newShelves={newShelves} bookInfo={bookInfo} setBookInfo={setBookInfo} />
                    </div>
                </Grid>
        </Grid>
    </DragDropContext>
    );
}

export default Home;