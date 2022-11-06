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

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState([])
  const [bookInfo, setBookInfo] = useState({})
  let history = useHistory()

 
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

  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
      {!loading ? 
        <Paper sx={{backgroundColor: '#fff9f5'}}>
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
                    <Home bookInfo={bookInfo} setBookInfo={setBookInfo} handleBookDetail={handleBookDetail}/> :
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
                <User currentUser={currentUser}/>
              </Route>
            </Switch>
          </Container>
        </Paper>
        : null}
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;