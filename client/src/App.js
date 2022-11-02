import { BrowserRouter, Switch, Route } from "react-router-dom";
import {RecoilRoot} from 'recoil'
import {useRecoilState} from 'recoil'
import Home from './components/Home'
import Navbar from "./components/Navbar";
import Login from "./components/Login"
import Signup from './components/Signup'
import {fictionBooksState} from './atoms'
import {nonfictionBooksState} from './atoms'

function App() {

  const [fictionBooks, setFictionBooks] = useRecoilState(fictionBooksState)
  const [nonfictionBooks, setNonfictionBooks] = useRecoilState(nonfictionBooksState)

  console.log(fictionBooks)
  console.log(nonfictionBooks)

  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
}

export default App;