import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function CartBook({book}) {
    return (
        <Container>
            <Card sx={{ maxWidth: 150 }}>
                <CardMedia
                    component="img"
                    image={book.book.cover_image}
                    alt={book.book.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                        {book.book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {book.book.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${book.book.price}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default CartBook;