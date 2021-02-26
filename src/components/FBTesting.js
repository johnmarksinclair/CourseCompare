import {
  getCourses,
  addCourse,
  getReviews,
  addReview,
  searchCourses,
} from "../firebase";
import { useState } from "react";

const FBTesting = () => {
  const [input, setInput] = useState("");
  //const [search, setSearch] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
    //setSearch(e.target.value);
    testSearch(e.target.value);
  };

  // const handleSubmit = () => {
  //   testSearch();
  //   setInput("");
  //   //setSearch("");
  // };

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
  const testGetReviews = async () => {
    console.log(await getReviews(courseExampleID));
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
      <button className="signbtn testedBtn" onClick={() => testGetReviews()}>
        getReviews
      </button>
      <button className="signbtn testedBtn" onClick={() => testAddReview()}>
        addReview
      </button>
      <button className="signbtn googlebtn" onClick={() => testGetReviews()}>
        editReview
      </button>
      <button className="signbtn googlebtn" onClick={() => testGetReviews()}>
        deleteReview
      </button>
      <button className="signbtn googlebtn" onClick={() => testGetReviews()}>
        editCourse
      </button>
      <button className="signbtn googlebtn" onClick={() => testGetReviews()}>
        deleteCourse
      </button>
      <div>
        <h3>Search Test</h3>
        <input value={input} onChange={(e) => handleChange(e)} />
        {/* <button className="signbtn googlebtn" onClick={() => handleSubmit()}>
          searchCourses
        </button> */}
      </div>
    </div>
  );
};

export default FBTesting;
