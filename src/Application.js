import { useContext } from "react";
import { UserContext } from "./providers/UserProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Course from "./components/Course";
import Courses from "./components/Courses";

function Application() {
  const user = useContext(UserContext);
  return (
    <div className="cont">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        {/* {user ? (
          <Switch>
            <Route path="/signin" exact component={Profile} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/course" exact component={Course} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        )} */}
        <Switch>
          <Route
            path="/signin"
            exact
            component={() => (user ? <Profile /> : <SignIn />)}
          />
          <Route path="/signup" exact component={SignUp} />
          <Route
            path="/profile"
            exact
            component={() => (user ? <Profile /> : <SignIn />)}
          />
          <Route
            path="/courses"
            exact
            component={() => (user ? <Courses /> : <SignIn />)}
          />
          <Route
            path="/course"
            exact
            component={() => (user ? <Course /> : <SignIn />)}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Application;
