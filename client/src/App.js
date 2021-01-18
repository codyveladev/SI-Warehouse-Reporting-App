import Dashboard from './Components/pages/Dashboard'
import Login from "./Components/pages/Login";
import Receiving from "./Components/pages/Receiving";
import Shipping from "./Components/pages/Shipping";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/receiving" component={Receiving}></Route>
        <Route path="/shipping" component={Shipping}></Route>
      </Switch>
    </Router>
  );
}

export default App;
