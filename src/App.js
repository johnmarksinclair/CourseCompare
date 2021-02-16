import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Nav";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Course from "./components/Course";

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="cont">
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/courses" exact component={Course} />
          <Route
            path="/signin"
            exact
            component={(props) => <SignIn user={user} setUser={setUser} />}
          />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
