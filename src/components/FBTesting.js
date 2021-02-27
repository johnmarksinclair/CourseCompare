import {
  getCourses,
  addCourse,
  getCoursesReviews,
  addReview,
  searchCourses,
} from "../firebase";
import { useState } from "react";

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

  // TESTING

  // works
  const testGetCourses = async () => {
    console.log(await getCourses());
  };
  // works
  const testAddCourse = () => {
    addCourse(fakeCourse);
  };
  // works
  const testGetCoursesReviews = async () => {
    console.log(await getCoursesReviews(courseExampleID));
  };
  // works
  const testAddReview = () => {
    addReview(fakeReview);
  };
  // idk
  const testSearch = async (search) => {
    console.log(await searchCourses(search));
  };

  return (
    <div>
      <h2>Firebase Testing</h2>
      <button className="signbtn testedBtn" onClick={() => testGetCourses()}>
        getCourses
      </button>
      <button className="signbtn testedBtn" onClick={() => testAddCourse()}>
        addCourse
      </button>
      <button
        className="signbtn testedBtn"
        onClick={() => testGetCoursesReviews()}
      >
        getCoursesReviews
      </button>
      <button className="signbtn testedBtn" onClick={() => testAddReview()}>
        addReview
      </button>
      <button
        className="signbtn googlebtn"
        onClick={() => testGetCoursesReviews()}
      >
        editReview
      </button>
      <button
        className="signbtn googlebtn"
        onClick={() => testGetCoursesReviews()}
      >
        deleteReview
      </button>
      <button
        className="signbtn googlebtn"
        onClick={() => testGetCoursesReviews()}
      >
        editCourse
      </button>
      <button
        className="signbtn googlebtn"
        onClick={() => testGetCoursesReviews()}
      >
        deleteCourse
      </button>
      <div>
        <h3>Search Test</h3>
        <input value={input} onChange={(e) => handleChange(e)} />
      </div>
    </div>
  );
};

export default FBTesting;
