// import { Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebase";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();

  const handleGoogleSignIn = () => {
    signInWithGoogle();
    history.push("/home");
  };

  return (
    <div className="flexauto centerteddiv authdiv">
      {/* <Form>
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
      </Form> */}
      <div className="noaccount">
        <button
          className="signbtn googlebtn"
          onClick={() => handleGoogleSignIn()}
        >
          Google Sign In
        </button>
      </div>
      {/* <div className="noaccount">
        <Form.Text className="text-muted">Don't have an account?</Form.Text>
        <Link className="nounderline" to="/signup">
          Sign Up
        </Link>
      </div> */}
    </div>
  );
};

export default SignIn;
