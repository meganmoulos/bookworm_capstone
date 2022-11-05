import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {RecoilRoot, useRecoilState} from 'recoil'
import Home from './components/Home'
import Navbar from "./components/Navbar";
import Login from "./components/Login"
import Signup from './components/Signup'
import React, { useEffect, useState } from "react";
import {currentUserState} from './atoms'
import Container from '@mui/material/Container'

function App() {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState([])

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

  console.log(currentUser)

  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
      {!loading ? 
        <BrowserRouter>
          <Navbar currentUser={currentUser} />
          <Container className="App">
            <Switch>
              <Route exact path="/" render={() => {
                return (
                    currentUser ? 
                    <Redirect to="/home" /> :
                    <Redirect to="/login" />
                )
              }}>
              </Route>
              <Route exact path="/home" render={() => {
                return (
                    currentUser ? 
                    <Home /> :
                    <Redirect to="/login" />
                )
              }}>
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </Container>
        </BrowserRouter>
        : null}
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;