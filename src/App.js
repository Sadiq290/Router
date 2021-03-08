import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import Found from './Home/Found';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Define from './Define/Define';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/country">
            <Home></Home>
          </Route>
          <Route path="/country/:name">
            <Define></Define>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Found></Found>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
