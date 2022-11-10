import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import {RecoilRoot} from 'recoil'
import Home from './components/Home'
import Navbar from "./components/Navbar";
import Login from "./components/Login"
import Signup from './components/Signup'
import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import {isAuthorizedState} from './atoms'
import BookDetail from "./components/BookDetail";
import User from "./components/User"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ShoppingCart from "./components/ShoppingCart";


const stripePromise = loadStripe('pk_test_w1U3RM7m1e0bfN4il6FiN6jg')

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState([])
  const [bookInfo, setBookInfo] = useState({})
  const [currentCart, setCurrentCart] = useState([])
  let history = useHistory()
  
  // const options = {
  //   clientSecret: '{{CLIENT_SECRET}}'
  // }
 
  useEffect(() => {
    fetch('/sessions/current')
    .then(res => {
      if(res.ok){
        res.json().then(data => {
          setCurrentUser(data)
          setLoading(false)
        })
      } else {
          res.json().then(json => setErrors(json.errors))
          setLoading(false)
        }
    })
  }, [])

  function handleBookDetail(book){
    const id = book.id
    fetch(`/books/${id}`)
        .then(res => {
          if(res.ok){
            res.json().then(data => {
              setBookInfo(data)
            })
            .then(history.push(`/books/${id}`))
          } else {
             res.json().then(json => setErrors(json.errors))
          }
        })  
  }

  function handleAddToCart(book){
    fetch('/cart_items', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            book_id: book.id,
            user_id: currentUser.id
        })
    })
    .then(res => res.json())
    .then(data => setCurrentCart(
      [...currentCart, data]
    ))
  }

  function handleCheckout(){
    // delete everything from cart_items
    // stripe
  }

  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
      {!loading ? 
        <Paper sx={{backgroundColor: '#fff9f5'}}>
          {/* <Elements stripe={stripePromise} options={options}> */}
            <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <Container className="App">
              <Switch>
                <Route exact path="/" render={() => {
                  return (
                      isAuthorizedState ? 
                      <Redirect to="/home" /> :
                      <Redirect to="/login" />
                  )
                }}>
                </Route>
                <Route exact path="/home" render={() => {
                  return (
                      isAuthorizedState ? 
                      <Home bookInfo={bookInfo} setBookInfo={setBookInfo} handleBookDetail={handleBookDetail} currentUser={currentUser} handleAddToCart={handleAddToCart}/> :
                      <Redirect to="/login" />
                  )
                }}>
                </Route>
                <Route exact path="/login">
                  <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
                </Route>
                <Route exact path="/signup">
                  <Signup currentUser={currentUser} setCurrentUser={setCurrentUser} />
                </Route>
                <Route path="/books/:id">
                  <BookDetail bookInfo={bookInfo} setBookInfo={setBookInfo} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
                </Route>
                <Route exact path="/user">
                  <User currentUser={currentUser} setCurrentUser={setCurrentUser}/>
                </Route>
                <Route exact path="/cart">
                  <ShoppingCart currentUser={currentUser} setCurrentUser={setCurrentUser} currentCart={currentCart} handleCheckout={handleCheckout}/>
                </Route>
              </Switch>
            </Container>
          {/* </Elements> */}
        </Paper>
        : null}
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;