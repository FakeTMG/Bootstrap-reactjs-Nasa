import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatorInfo from './components/CreatorInfo';
import HomePage from './components/HomePage';
import Login from './components/login';
import WrongPage from './components/WrongPage';
import SignUp from './components/SignUp';
import Favorite from './components/Fav/Favorite';
import ChangePass from './components/ChangePass';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/fav" component={Favorite} />
          <Route path="/" exact component={HomePage} />
          {
            localStorage.getItem('status')==='logged' ? <Route path="/change_pass" component={ChangePass} /> :<Route path="/"  component={WrongPage} />
          }


          
          <Route path="/" component={WrongPage} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
