import { useContext, useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import SignIn from "./SignIn";
//import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { getCourses } from "../backendCalls/CourseCalls";
import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import trinitylogo from "../assets/trinitylogo.jpeg";

const CourseSearch = () => {
  const user = useContext(UserContext);
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
            <div className="col-xs-12 col-sm-6 col-xl-5">
              <div className="row">
                <div className="col-2 d-none d-md-block py-8">
                  <img src={trinitylogo} alt="" className="w-full" />
                </div>
                <div className="col-4 py-8">
                  <div className="title">{course.title}</div>
                  <div>{course.host}</div>
                  <div>Rating: {course.rating}</div>
                </div>
                <div className="col-5 py-8">
                  <div>{course.type}</div>
                  <div>Duration: {course.length}</div>
                  <div>Fees: €{course.cost}</div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-xl-7 py-8">
              <div className="font-bold">Description</div>
              <p className="text-justify">{course.description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div>
      {user ? (
        <div className="flex flex-col h-full px-4">
          <div className="pt-4 text-gray-700 row">
            <div className="col-sm-12 col-md-3 text-center pb-4">
              <div className="font-semibold text-3xl">Courses Search</div>
            </div>
            <div className="col-sm-12 col-md-6 items-center pb-4">
              <FormControl
                placeholder="Search"
                value={searchInput}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="divide-y-2 overflow-y-auto">
            {searching
              ? matchingCourses.map((course) => (
                  <CourseButton course={course} key={course.id} />
                ))
              : courseData.map((course) => (
                  <CourseButton course={course} key={course.id} />
                ))}
          </div>
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default CourseSearch;
