
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamInformation from './TeamInformation/TeamInformation';
import Home from './Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:idTeam">
            <TeamInformation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
