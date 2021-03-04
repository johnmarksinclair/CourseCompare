import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { signInWithGoogle } from "../firebase";
import grad from "../assets/grad.svg";
import option from "../assets/option.svg";
//import choice from "../assets/choice.svg";

const Home = () => {
  const user = useContext(UserContext);

  return (
    <div className="col">
      <div className="row">
        <div className="col-sm-12 col-md-5 pt-10 flex flex-col justify-center hometext">
          <div className="flex flex-col justify-center homeblock">
            <div className="col-sm-12 col-md-8">
              <h1 className="text-gray-800">Make the right decision.</h1>
              <h4 className="text-gray-600">
                We at CourseCompare are here to help you make the right decision
                when it comes to your degree
              </h4>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-7 flex justify-center items-center">
          <div className="col-10 p-10">
            <img src={option} alt="" width="100%" />
          </div>
        </div>
      </div>
      <div className="bg-blue-50 row">
        <div className="col-sm-12 col-md-7 flex justify-center items-center">
          <div className="col-sm-10 col-md-8 p-10">
            <img src={grad} alt="" width="100%" />
          </div>
        </div>
        <div className="col-sm-12 col-md-5 p-10 hometext flex justify-center items-center">
          {user ? (
            <div className="col-sm-10 col-md-8 flex flex-col items-center">
              <div>
                <h4 className="text-gray-600">
                  Start exploring our courses on the courses page
                </h4>
              </div>
            </div>
          ) : (
            <div className="col-sm-10 col-md-8 flex flex-col items-center">
              <div>
                <h4 className="text-gray-600">
                  Sign in below to take control of your course decision
                </h4>
              </div>
              <div className="pt-4">
                <button
                  className="signbtn homebtn"
                  onClick={() => signInWithGoogle()}
                >
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="bg-blue-100">
        <img src={choice} alt="" width="500" />
      </div> */}
    </div>
  );
};

export default Home;
