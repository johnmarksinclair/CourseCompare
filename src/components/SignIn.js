import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const SignIn = () => {
  return (
    <div>
      Sign In
      <div>
        <Link to="/signup">
          <Button variant="outline-primary">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
