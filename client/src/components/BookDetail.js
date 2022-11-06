import React from 'react';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Review from './Review';

function BookDetail({bookInfo, currentUser, setCurrentUser}) {

    console.log(bookInfo)

    return (
        <Container sx={{ width: 600 }}>
            <Paper elevation={2}>
                <Box padding={3}>
                    <img src = {bookInfo.cover_image} alt={bookInfo.title}/>
                </Box>
                <Box padding={3}>
                    <Typography gutterBottom variant="h5" component="div">
                        {bookInfo.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Authors: {bookInfo.author}
                    </Typography>
                    <Typography gutterBottom variant="body2" >
                        {bookInfo.description}
                    </Typography>
                    <Typography gutterBottom variant="body2" >
                        Number of pages: {bookInfo.number_of_pages}
                    </Typography>
                    <Typography gutterBottom variant="body2" >
                        Published: {bookInfo.publication_year} {bookInfo.publisher}
                    </Typography>
                </Box>
            </Paper>
            <Paper elevation={2}>
                <Box padding={3}> 
                    {bookInfo.id ?
                        <Review bookInfo={bookInfo} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
                    : null
                    }
                </Box>
            </Paper>
        </Container>
    );
}

export default BookDetail;
