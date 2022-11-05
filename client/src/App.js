import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {RecoilRoot, useRecoilState} from 'recoil'
import Home from './components/Home'
import Navbar from "./components/Navbar";
import Login from "./components/Login"
import Signup from './components/Signup'
import React from "react";
import {currentUserState} from './atoms'
import Container from '@mui/material/Container'


function App() {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

  console.log(currentUser)
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Navbar />
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
              <Route exact path="/home">
                <Home />
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
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;