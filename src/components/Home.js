import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { signInWithGoogle } from "../firebase";

const Home = () => {
  const user = useContext(UserContext);
  return (
    <div className="flexauto">
      <div className="home-img-div">
        <div className="home-glass" />
      </div>
      <div className="home-text-div">
        <h2>Home</h2>
        {user ? (
          <></>
        ) : (
          <button
            className="signbtn googlebtn"
            onClick={() => signInWithGoogle()}
          >
            Google Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
