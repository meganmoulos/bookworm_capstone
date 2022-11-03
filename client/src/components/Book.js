import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container'

function Book({book}) {

    return (
        <Container>
                <Card sx={{ maxWidth: 200 }}>
                    <CardMedia
                        component="img"
                        height="100"
                        image={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                    />
                    <CardContent>
                        <p>{book.volumeInfo.title}</p>
                        <p>{book.volumeInfo.authors}</p>
                    </CardContent>
                </Card>
        </Container>
    );
}

export default Book;