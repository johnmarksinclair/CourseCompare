import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flexauto centerteddiv">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="centerteddiv">
          <Link to="/signin">
            <button className="signbtn">Sign Up</button>
          </Link>
        </div>
        <div className="noaccount">
          <Form.Text className="text-muted">Back to</Form.Text>
          <Link to="/signin" className="nounderline">
            Sign In
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
