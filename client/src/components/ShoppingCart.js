import React from 'react';
import CartBook from './CartBook';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

function ShoppingCart({currentCart, handleCheckout}) {

    let sum = currentCart.reduce((total, currentValue) => total + parseFloat(currentValue.book.price), 0)

    return (

        <div>
            <h1>My Cart</h1>
            <h3>Total: ${sum}</h3>
            <Button variant='contained' onClick={handleCheckout}>Checkout</Button>
            <Grid container spacing={1} padding={1}>
                {currentCart.map(book => 
                    <Grid item key={book.id}>
                        <CartBook key={book.id} book={book}/>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default ShoppingCart;

