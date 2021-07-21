import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatorInfo from './components/CreatorInfo';
import HomePage from './components/HomePage';
import Login from './components/login';
import WrongPage from './components/WrongPage';
import SignUp from './components/SignUp';
import Favorite from './components/Fav/Favorite';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/fav" component={Favorite} />


          <Route path="/" exact component={HomePage} />
          <Route path="/creatorinfo" component={CreatorInfo} />
          <Route path="/" component={WrongPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
