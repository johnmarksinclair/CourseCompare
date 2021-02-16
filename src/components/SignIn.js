import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = (props) => {
  const handleSignIn = () => {
    props.setUser(true);
  };

  return (
    <div className="flexauto centerteddiv">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="centerteddiv">
          <Link to="/home">
            <button className="signbtn" onClick={() => handleSignIn()}>
              Sign In
            </button>
          </Link>
        </div>
        <div className="noaccount">
          <Form.Text className="text-muted">Don't have an account?</Form.Text>
          <Link className="nounderline" to="/signup">
            Sign Up
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
