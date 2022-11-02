import { BrowserRouter, Switch, Route } from "react-router-dom";
import {RecoilRoot} from 'recoil'
import {bookState} from './atoms'
import {useRecoilState} from 'recoil'
import Home from './components/Home'
import Navbar from "./components/Navbar";
import Login from "./components/Login"
import Signup from './components/Signup'

function App() {

  const [book, setBook] = useRecoilState(bookState)

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
              <h1>{book}</h1> 
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
    </RecoilRoot>
  );
}

export default App;