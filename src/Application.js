// import { useContext } from "react";
// import { UserContext } from "./providers/UserProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Course from "./components/Course";
import CourseSearch from "./components/CourseSearch";
import Module from "./components/Module";
import Loans from "./components/Loans";
import FBTesting from "./components/FBTesting";

function Application() {
  //const user = useContext(UserContext);
  return (
    <div className="cont">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/firebase" component={FBTesting} />
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/coursesearch" exact component={CourseSearch} />
          <Route path="/coursesearch/:id" component={Course} />
          <Route path="/modules/:id" component={Module} />
          <Route path="/loans" component={Loans} />
        </Switch>
      </Router>
    </div>
  );
}

export default Application;
