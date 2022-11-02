import { BrowserRouter, Switch, Route } from "react-router-dom";
import {RecoilRoot} from 'recoil'
import Home from './components/Home'
import Navbar from "./components/Navbar";
import Login from "./components/Login"
import Signup from './components/Signup'
import React from "react";

function App() {

  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Navbar />
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;