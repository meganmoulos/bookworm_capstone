import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'

function GoogleBook({book}) {
    console.log(book)
    return (
        <Card>
            <CardMedia
                component="img"
                image={book.volumeInfo.imageLinks ? 
                    book.volumeInfo.imageLinks.thumbnail :
                    null}
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
    );
}

export default GoogleBook;