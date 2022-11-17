import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import PopOver from './PopOver';

function GoogleBook({book}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleGoogleBookDetail = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            <Card onClick={handleGoogleBookDetail}>
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
            <PopOver book={book} anchorEl={anchorEl} setAnchorEl={setAnchorEl}/> 
        </>
    );
}

export default GoogleBook;