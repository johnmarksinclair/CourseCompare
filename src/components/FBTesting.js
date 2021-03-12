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
    courseID: "KlKwFOMA0lJRgkHBAfGf",
    author: "john",
    body: "terrible",
    rating: 2.8,
  };

  const courseExampleID = "KlKwFOMA0lJRgkHBAfGf";
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
    </div>
  );
};

export default FBTesting;
