import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function ShelfBook({book, handleBookDetail, handleAddToCart}) {
    
    return (
        <Container>
                <Card sx={{ maxWidth: 200 }} onClick={() => handleBookDetail(book)}>
                    <CardMedia
                        component="img"
                        image={book.cover_image}
                        alt={book.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                            {book.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {book.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ${book.price}
                        </Typography>
                    </CardContent>
                </Card>
                <Button variant='contained' onClick={() => handleAddToCart(book)}>Add to Cart</Button>
        </Container>
    );
}

export default ShelfBook;