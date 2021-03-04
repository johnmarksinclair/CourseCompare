import { useEffect, useState } from "react";
//import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { getCourses } from "../backendCalls/CourseCalls";
import { FormControl } from "react-bootstrap";

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

  // const callSearchCourses = async (search) => {
  //   if (search.length <= 0) {
  //     updateData();
  //     return;
  //   }
  //   let matching = await searchCourses(search);
  //   //console.log(matching);
  //   if (matching.length > 0) setCourseData(matching);
  // };

  const handleCourseSelect = (data) => {
    console.log(`clicked ${data.id}`);
    // route to /course and pass data as param
    // will then need to grab reviews
    // in course useEffect will call getReviews()
  };

  const CourseButton = (props) => {
    return (
      <div className="listdiv">
        <div
          className="btndiv"
          onClick={() => {
            handleCourseSelect(props.course);
          }}
        >
          <div className="col-sm-4 col-md-2">
            <div className="title">{props.course.title}</div>
            <div>{props.course.host}</div>
            <div>{props.course.rating} ⭐️</div>
          </div>
          <div className="col-sm-4 col-md-2">
            <div>{props.course.type}</div>
            <div>{props.course.length}</div>
            <div>€{props.course.cost}</div>
          </div>
          <div className="col">
            <div>{props.course.description}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="searchcont">
      <div className="searchleft">
        <div className="searchdash">
          <h2>Courses Search</h2>
          <div className="">
            <FormControl
              placeholder="Search"
              value={searchInput}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>

      <div className="searchright">
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
