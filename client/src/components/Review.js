import React from 'react';
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

function Review({bookInfo}) {

    const reviews = bookInfo.reviews.length

    return (
        <div>
            {(reviews > 0) ? 
                <div>
                    <Rating name="bookrating" value={bookInfo.reviews[0].star_rating} readOnly/>
                    <Typography gutterBottom variant="body2" component="div">
                        Comments: {bookInfo.reviews[0].comment}
                    </Typography>
                </div>
                :
                <div>
                    <p>Leave a review:</p>
                </div>

        }
        </div>
    );
}

export default Review;