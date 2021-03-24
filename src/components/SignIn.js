import { Jumbotron } from "react-bootstrap";
import { signInWithGoogle } from "../firebase";

const SignIn = () => {
  return (
    <div className="px-2 pt-40 flex justify-center items-center">
      <Jumbotron>
        <div className="text-4xl pb-2">Please sign in!</div>
        <p>To explore Course Compare further please sign in below</p>
        <div className="flex justify-center items-center pt-2">
          <button className="homebtn bump" onClick={() => signInWithGoogle()}>
            Sign In
          </button>
        </div>
      </Jumbotron>
    </div>
  );
};

export default SignIn;
