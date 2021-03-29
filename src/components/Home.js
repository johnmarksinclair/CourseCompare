import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { signInWithGoogle } from "../firebase";
import grad from "../assets/grad.svg";
import option from "../assets/option.svg";
import cert from "../assets/cert.svg";
//import choice from "../assets/choice.svg";
import TextAnimation from "../components/TextAnimation";

const Home = () => {
  const user = useContext(UserContext);
  return (
    <div className="col">
      <div className="row">
        <div className="col-sm-12 col-lg-5 pt-10 flex flex-col justify-center hometext">
          <div className="flex flex-col justify-center homeblock">
            <div className="col-sm-12 col-md-10 col-xl-8">
              <TextAnimation text="Make the right decision."
               font="text-gray-800 font-semibold text-5xl"/>
              <TextAnimation text="We at CourseCompare are here to help you make the right decision when it comes to your degree" 
              font="text-gray-600 font-semibold text-2xl pt-6"/>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-7 flex justify-center items-center">
          <div className="col-10 p-10">
            <img src={option} alt="" width="100%" />
          </div>
        </div>
      </div>

      <div className="row bg-blue-50 homereverse">
        <div className="col-sm-12 col-lg-7 flex justify-center items-center">
          <div className="col-10 p-10">
            <img src={cert} alt="" width="100%" />
          </div>
        </div>
        <div className="col-sm-12 col-lg-5 pt-10 flex flex-col justify-center hometext">
          <div className="flex flex-col justify-center homeblockmid">
            <div className="col-sm-12 col-md-8">
              <TextAnimation text="We let students rate their modules and courses to provide you
                with the information you need to make your choice"
                font="text-gray-600 font-semibold text-2xl pb-10"/>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-5 p-10 hometext flex justify-center items-center">
          {user ? (
            <div className="col-sm-10 col-md-8 flex flex-col items-center">
              <div>
                <TextAnimation text="Start exploring our courses on the courses page"
                font="text-gray-600 font-semibold text-2xl"/>
              </div>
            </div>
          ) : (
            <div className="col-sm-10 col-md-8 flex flex-col items-center">
              <div>
                <div className="text-gray-600 font-semibold text-2xl">
                  Sign in below to take control of your course decision
                </div>
              </div>
              <div className="pt-4">
                <button
                  className="homebtn bump"
                  onClick={() => signInWithGoogle()}
                >
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="col-sm-12 col-md-7 flex justify-center items-center">
          <div className="col-sm-10 col-md-8 p-10">
            <img src={grad} alt="" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
