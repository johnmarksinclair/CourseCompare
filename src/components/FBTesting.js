import { useState } from "react";
import {
  getCourses,
  getCourse,
  addCourse,
  editCourse,
  deleteCourse,
  searchCourses,
} from "../backendCalls/CourseCalls";
import {
  getCourseReviews,
  addReview,
  editReview,
  deleteReview,
} from "../backendCalls/ReviewCalls";
//import ReviewPopup from "./ReviewPopup";

const FBTesting = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
    testSearch(e.target.value);
  };

  const fakeCourse = {
    title: "Law",
    host: "TCD",
    type: "MLB",
    description: "law...",
    length: "2 years",
    cost: "12000",
    rating: 3.9,
  };

  const fakeReview = {
    courseID: "2aCYcDL577Fbu2EsMTDt",
    author: "dave",
    body: "really good",
    rating: 4.8,
  };

  const courseExampleID = "2aCYcDL577Fbu2EsMTDt";
  const reviewExampleID = "GVomJPsxT20ZkU1VLUB9";

  // idk
  const testSearch = async (search) => {
    console.log(await searchCourses(search));
  };

  return (
    <div className="bg-blue-0">
      <h2>Firebase Testing</h2>
      <button
        className="signbtn testedBtn"
        onClick={async () => console.log(await getCourses())}
      >
        getCourses
      </button>
      <button
        className="signbtn testedBtn"
        onClick={async () => console.log(await getCourse(courseExampleID))}
      >
        getCourse
      </button>
      <button
        className="signbtn testedBtn"
        onClick={() => addCourse(fakeCourse)}
      >
        addCourse
      </button>
      <button
        className="signbtn googlebtn"
        onClick={() => editCourse(courseExampleID)}
      >
        editCourse
      </button>
      <button
        className="signbtn googlebtn"
        onClick={() => deleteCourse(courseExampleID)}
      >
        deleteCourse
      </button>
      <button
        className="signbtn testedBtn"
        onClick={async () =>
          console.log(await getCourseReviews(courseExampleID))
        }
      >
        getCourseReviews
      </button>
      <button
        className="signbtn testedBtn"
        onClick={() => addReview(fakeReview)}
      >
        addReview
      </button>
      <button
        className="signbtn testedBtn"
        onClick={() => editReview(reviewExampleID, "new edited body")}
      >
        editReview
      </button>
      <button
        className="signbtn testedBtn"
        onClick={() => deleteReview(reviewExampleID)}
      >
        deleteReview
      </button>
      <div>
        <h3>Search Test</h3>
        <input value={input} onChange={(e) => handleChange(e)} />
      </div>

      {/* <div>
        <p className="font-bold text-2xl">Add Review Testing</p>
        <button
          className="homebtn"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Add
        </button>
      </div> */}
    </div>
  );
};

export default FBTesting;
