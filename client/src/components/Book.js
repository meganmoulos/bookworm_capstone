import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function Book({book}) {

    return (
        <Container>
                <Card sx={{ maxWidth: 150 }}>
                    <CardMedia
                        component="img"
                        image={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                            {book.volumeInfo.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {book.volumeInfo.authors}
                        </Typography>
                    </CardContent>
                </Card>
        </Container>
    );
}

export default Book;