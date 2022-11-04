import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function ShelfBook({book}) {

    return (
        <Container>
                <Card sx={{ minWidth: 150 }}>
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
                    </CardContent>
                </Card>
        </Container>
    );
}

export default ShelfBook;