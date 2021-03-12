import { useEffect, useState } from "react";
//import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { getCourses } from "../backendCalls/CourseCalls";
import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
//import trinitylogo from "../assets/trinitylogo.jpeg";

const CourseSearch = () => {
  const [courseData, setCourseData] = useState([]);
  const [matchingCourses, setMatchingCourses] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, []);

  const updateData = async () => {
    let courses = await getCourses();
    setCourseData(courses);
    setMatchingCourses(courses);
    setSearchInput("");
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value.length > 0) {
      setSearching(true);
      //console.log(e.target.value);
      //callSearchCourses(e.target.value);
      searchCachedCourses(e.target.value);
    } else {
      setSearching(false);
    }
  };

  const searchCachedCourses = (search) => {
    let matching = [];
    let lowerSearch = search.toLowerCase();
    courseData.forEach((doc) => {
      let lowerTitle = doc.title.toLowerCase();
      if (lowerTitle.includes(lowerSearch)) {
        matching.push(doc);
      }
    });
    setMatchingCourses(matching);
  };

  const CourseButton = ({ course }) => {
    return (
      <div className="px-4 hover:bg-gray-50">
        <Link
          to={`/coursesearch/${course.id}`}
          className="text-gray-500 hover:text-gray-500 hover:no-underline"
        >
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="row">
                <div className="col-6 py-8">
                  <div className="title">{course.title}</div>
                  <div>{course.host}</div>
                  <div>Rating: {course.rating}</div>
                </div>
                <div className="col-6 py-8">
                  <div>{course.type}</div>
                  <div>Duration: {course.length}</div>
                  <div>Fees: €{course.cost}</div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-8 py-8">
              <div className="font-bold">Description</div>
              <p className="text-justify">{course.description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full px-4">
      <div className="pt-4 pb-2 text-gray-700 row">
        <div className="col-sm-12 col-md-3 text-center">
          <h2>Courses Search</h2>
        </div>
        <div className="col-sm-12 col-md-6 items-center">
          <FormControl
            placeholder="Search"
            value={searchInput}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="divide-y-2 overflow-y-auto ">
        {searching
          ? matchingCourses.map((course) => (
              <CourseButton course={course} key={course.id} />
            ))
          : courseData.map((course) => (
              <CourseButton course={course} key={course.id} />
            ))}
      </div>
    </div>
  );
};

export default CourseSearch;
