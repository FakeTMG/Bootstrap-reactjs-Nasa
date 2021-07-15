import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatorInfo from './components/CreatorInfo';
import HomePage from './components/HomePage';
import login from './components/login';
import WrongPage from './components/WrongPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={login} />
          <Route path="/" exact component={HomePage} />
          <Route path="/creatorinfo" component={CreatorInfo} />
          <Route path="/" component={WrongPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
