import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { signInWithGoogle } from "../firebase";

const Home = () => {
  const user = useContext(UserContext);
  return (
    <div className="flexauto">
      <h2>Home</h2>
      {user ? (
        <></>
      ) : (
        <div className="noaccount">
          <button
            className="signbtn googlebtn"
            onClick={() => signInWithGoogle()}
          >
            Google Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
