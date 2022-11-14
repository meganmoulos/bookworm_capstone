import React, {useState} from 'react';
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function Review({bookInfo, currentUser}) {
    const reviews = bookInfo.reviews.length
    const [errors, setErrors] = useState([])
 
    const [user, setUser] = useState(currentUser)
    const [book, setBook] = useState(bookInfo)
    const [starRating, setStarRating] = useState(0)
    const [userComment, setUserComment] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        const review = {
            user_id: user.id,
            book_id: book.id,
            star_rating: starRating,
            comment: userComment
        }
        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => {
            if(res.ok){
                // add something here to rerender
            } else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    }

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
                    <form onSubmit={handleSubmit}>
                        <Box sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <label>Star rating:</label>
                            <Rating
                                name="simple-controlled"
                                value={starRating}
                                onChange={(e, newValue) => {setStarRating(newValue)}}
                            />
                            <label>Comment:</label>
                            <input 
                                type="text" 
                                name="comment"
                                value={userComment}
                                onChange={e => setUserComment(e.target.value)}
                            />
                            <Button variant='contained' type='submit'>Submit</Button>
                        </Box>
                    </form>
                </div>
            }
        </div>
    );
}

export default Review;