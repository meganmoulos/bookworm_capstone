import React, {useState, useEffect} from 'react';
import GoogleBooksGrid from './GoogleBooksGrid';
import Shelves from './Shelves';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { DragDropContext } from "react-beautiful-dnd";
import {fetchShelves} from '../atoms'
import {useRecoilValue} from 'recoil'
import {googleBooksState} from '../atoms'


function Home({handleBookDetail, currentUser, handleAddToCart, searchQuery, anchorEl, setAnchorEl, handleGoogleBookDetail}) {
    const [query, setQuery] = useState("potter+subject:fiction")
    const [newShelves, setNewShelves] = useState([])
    const googleBooks = useRecoilValue(googleBooksState(query))
    const [newShelf, setNewShelf] = useState('')
    
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

    let currentBook = {}
    let currentBooks = []
    
    if (newShelves.length > 0) {
        currentBooks = newShelves[1].books
    }

    if (currentBooks.length > 0){
       currentBook = currentBooks[0]
    }

    function handleNewShelf(e){
        e.preventDefault()
        fetch('/shelves', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: newShelf,
                user_id: currentUser.id
            })
        })
        .then(res => res.json())
        .then(data => {
            setNewShelves([...newShelves, data])
        })
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
                        <h3>Currently Reading</h3>
                        <Card>
                            <CardMedia
                                component="img"
                                image={currentBook.cover_image ? 
                                    currentBook.cover_image :
                                    null}
                                alt={currentBook.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body1" component="div">
                                    {currentBook.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {currentBook.author}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {currentBook.publication_year}
                                </Typography>
                                </CardContent>
                        </Card>
                        <Card variant="outlined" sx={{marginTop: 3}}>
                            <CardContent>
                                <Typography gutterBottom variant="body1" component="div">
                                    It's easy! Just drag and drop a book onto one of your shelves below.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card variant="outlined" sx={{marginTop: 3}}>
                            <CardContent>
                                <Typography gutterBottom variant="body1" component="div">
                                    Create a Shelf:
                                </Typography>
                                <form onSubmit={handleNewShelf}>
                                    <input 
                                        type='text'
                                        value={newShelf}
                                        onChange={e => setNewShelf(e.target.value)}
                                    />
                                    <Button variant='contained' type='submit'>
                                        Create Shelf
                                    </Button>
                                </form>
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
                                <Tab label="SciFi & Fantasy" value="dragon"/>
                                {searchQuery ? 
                                <Tab label="Search" value={searchQuery} />
                                : null }
                            </Tabs>
                        </Box>
                        <GoogleBooksGrid query={query} />
                    </Grid>
                </Grid>
                <Grid container item>
                    <Container>
                        <Shelves newShelves={newShelves} handleBookDetail={handleBookDetail} currentUser={currentUser} handleAddToCart={handleAddToCart}/>
                    </Container>
                </Grid>
        </Grid>
    </DragDropContext>
    );
}

export default Home;